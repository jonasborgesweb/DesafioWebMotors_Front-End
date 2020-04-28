import React, { useEffect, useState, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Api
import Api from '../../services/Api';

// Import Components
import Header from '../../components/Header';

import FormatValue from '../../utils/formatValue';

// Import CSS
import {
  Container,
  Center,
  Filter,
  FilterContent,
  Content,
  GroupInfo,
  Row,
  RowDivider,
  Select,
  BtnReset,
  BtnSubmit,
  ContainerList,
  Card,
  Title,
  Pagination,
} from './styles';

interface VehiclesProps {
  ID: number;
  Make: string;
  Model: string;
  Version: string;
  Image: string;
  KM: number;
  Price: number;
  YearModel: Date;
  YearFab: Date;
  Color: string;
}

interface MakeProps {
  ID: number;
  Name: string;
}

interface ModelProps {
  MakeID: number;
  ID: number;
  Name: string;
}

interface VersionProps {
  ModelID: number;
  ID: number;
  Name: string;
}

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [vehicles, setVehicles] = useState<VehiclesProps[]>([]);
  const [makes, setMake] = useState<MakeProps[]>([]);
  const [model, setModel] = useState<ModelProps[]>([]);
  const [version, setVersion] = useState<VersionProps[]>([]);

  /** Estados para o Filtro */
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  /** Função para carregar os Veiculos */
  const loadVehicles = useCallback((page: number) => {
    // /http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1
    Api.get(`/Vehicles?Page=${page}`).then((response) => {
      if (response.data.length > 0) {
        setVehicles(response.data);
        setCurrentPage(page);
      }
    });
  }, []);

  /** Função para  carregar as Marcas */
  const loadMakes = useCallback(() => {
    Api.get('/Make').then((response) => {
      setMake(response.data);
    });
  }, []);

  /**
   * Função para Resetar o Filtros
   * Recarregando a página com todos os dados
   */
  const handleReset = useCallback(() => {
    setMake([]);
    loadMakes();
    setModel([]);
    setVersion([]);
    loadVehicles(currentPage);
  }, [currentPage, loadVehicles, loadMakes]);

  /** Inicializando as Funções */
  useEffect(() => {
    loadVehicles(currentPage);
    loadMakes();
  }, [loadVehicles, loadMakes, currentPage]);

  /**
   * Função para recuperar o valor do Select(Marca)
   * Indo na API e buscando as informaçẽos do Select(Modelo)
   */
  const handleMake = useCallback((event) => {
    const idMake = event.target.value;

    // Recuperando o Valor para o Filtro
    setSelectedMake(event.target.options[event.target.selectedIndex].text);

    // http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1
    Api.get(`/Model?MakeID=${idMake}`).then((response) => {
      setModel(response.data);
    });
  }, []);

  /**
   * Função para recuperar o valor do Select(Modelo)
   * Indo na API e buscando as informaçẽos do Select(Versão)
   */
  const handleModels = useCallback((event) => {
    const idModel = event.target.value;

    // Recuperando o Valor para o Filtro
    setSelectedModel(event.target.options[event.target.selectedIndex].text);

    // http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=1
    Api.get(`/Version?ModelID=${idModel}`).then((response) => {
      setVersion(response.data);
    });
  }, []);

  /**
   * Função para recuperar o valor do Select(Versão)
   */
  const handleVersion = useCallback((event) => {
    console.log('handleVersion');
  }, []);

  /** Função para realizar a páginação */
  const pagination = useCallback(
    (targetPage: number) => {
      loadVehicles(targetPage);
    },
    [loadVehicles],
  );

  const LoadVehiclesFilter = useCallback(() => {
    const vel = vehicles.filter(
      (vehicle) =>
        vehicle.Make === selectedMake && vehicle.Model === selectedModel,
    );

    setVehicles(vel);
  }, [selectedMake, vehicles, selectedModel]);

  return (
    <>
      <Header />
      <Title>Desafio Front-End</Title>
      <Container>
        <Filter>
          <h2>Comprar Carros</h2>
          <FilterContent>
            <GroupInfo>
              <Row>
                <Select>
                  <option selected disabled>
                    Localização
                  </option>
                </Select>
              </Row>
              <RowDivider>
                <Select>
                  <option selected disabled>
                    Ano Desejado
                  </option>
                </Select>
                <Select>
                  <option selected disabled>
                    Faixa de Preço
                  </option>
                </Select>
              </RowDivider>
            </GroupInfo>
            <GroupInfo>
              <RowDivider>
                <Select onChange={handleMake}>
                  <option selected disabled>
                    Marca: Todas
                  </option>
                  {makes.map((item) => (
                    <option key={item.ID} value={item.ID}>
                      {item.Name}
                    </option>
                  ))}
                </Select>
                <Select onChange={handleModels}>
                  <option selected disabled>
                    Modelo: Todos
                  </option>
                  {model.map((item) => (
                    <option key={item.ID} value={item.ID}>
                      {item.Name}
                    </option>
                  ))}
                </Select>
              </RowDivider>
              <Row>
                <Select onChange={handleVersion}>
                  <option selected disabled>
                    Versão: Todas
                  </option>
                  {version.map((item) => (
                    <option key={item.ID} value={item.ID}>
                      {item.Name}
                    </option>
                  ))}
                </Select>
              </Row>
            </GroupInfo>
          </FilterContent>
          <div className="bottom">
            <BtnReset type="button" onClick={handleReset}>
              Limpar Filtros
            </BtnReset>
            <BtnSubmit type="button" onClick={LoadVehiclesFilter}>
              Ver Ofertas
            </BtnSubmit>
          </div>
        </Filter>
        <Content>
          <Center>
            <ContainerList>
              {vehicles.map((item) => (
                <Card key={item.ID}>
                  <header>
                    <div style={{ backgroundImage: `url(${item.Image})` }} />
                  </header>
                  <div className="content">
                    <div>
                      <h2>
                        {item.Make} {item.Model}
                      </h2>
                      <h3>{item.Version}</h3>
                      <h4>Cor: {item.Color}</h4>
                    </div>
                    <div>
                      <strong>{FormatValue(item.Price)}</strong>
                      <div>
                        <p>
                          {item.YearFab} / {item.YearModel}
                        </p>
                        <p>{item.KM} KM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </ContainerList>
            <Pagination>
              <li>
                <button
                  type="button"
                  onClick={() => pagination(currentPage - 1)}
                >
                  <FaChevronLeft size={25} />
                </button>
              </li>
              <li>
                <span>{currentPage}</span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => pagination(currentPage + 1)}
                >
                  <FaChevronRight size={25} />
                </button>
              </li>
            </Pagination>
          </Center>
        </Content>
      </Container>
    </>
  );
};

export default Home;
