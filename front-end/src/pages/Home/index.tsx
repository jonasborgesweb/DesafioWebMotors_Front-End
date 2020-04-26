import React, { useEffect, useState, useCallback } from 'react';

// Import Api
import Api from '../../services/Api';

// Import CSS
import {
  Container,
  Center,
  Filter,
  Content,
  GroupInfo,
  Row,
  Select,
  ContainerList,
  Card,
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
  const [vehicles, setVehicles] = useState<VehiclesProps[]>([]);
  const [makes, setMake] = useState<MakeProps[]>([]);
  const [model, setModel] = useState<ModelProps[]>([]);
  const [version, setVersion] = useState<VersionProps[]>([]);
  useEffect(() => {
    Api.get('/Make').then((response) => {
      setMake(response.data);
    });

    // /http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1
    Api.get('/Vehicles?Page=1').then((response) => {
      console.log(response.data);
      setVehicles(response.data);
    });
  }, []);

  const handleMake = useCallback((event) => {
    const idMake = event.target.value;

    // http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1

    Api.get(`/Model?MakeID=${idMake}`).then((response) => {
      setModel(response.data);
    });
  }, []);

  const handleModels = useCallback((event) => {
    const idModel = event.target.value;

    // http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=1

    Api.get(`/Version?ModelID=${idModel}`).then((response) => {
      setVersion(response.data);
    });
  }, []);
  return (
    <>
      <Container>
        <Filter>
          <GroupInfo>
            <Select>
              <option selected disabled>
                Localização
              </option>
            </Select>
            <Row>
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
            </Row>
          </GroupInfo>
          <GroupInfo>
            <Row>
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
            </Row>
            <Select>
              <option selected disabled>
                Versão: Todas
              </option>
              {version.map((item) => (
                <option key={item.ID} value={item.ID}>
                  {item.Name}
                </option>
              ))}
            </Select>
          </GroupInfo>
        </Filter>
        <Content>
          <Center>
            <ContainerList>
              {vehicles.map((item) => (
                <Card key={item.ID}>
                  <header>
                    <img src={item.Image} alt={item.Model} />
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
                      <strong>R$ {item.Price}</strong>
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
          </Center>
        </Content>
      </Container>
    </>
  );
};

export default Home;
