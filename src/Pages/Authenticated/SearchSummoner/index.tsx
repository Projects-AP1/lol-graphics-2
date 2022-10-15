import { useCallback, useState } from "react";
import { Row, Col, ButtonGroup } from "reactstrap";
import {Form} from '@unform/web';
import {toast} from 'react-toastify';
import Button from "@mui/material/Button";

import Modal from '@Components/Modal';
import {useAppContext} from '@Components/container';
import {BasicInput} from '@Components/Form/index';
import { GetSummoner } from "@Hooks/api";
import { InsertSummoner } from "@Hooks/api";
import { SummonerData } from "@Interfaces/index";
 
export default function SearchSummoner(): JSX.Element {
  const {setIsSideBar} = useAppContext();
  const [summonerData, setSummonerData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleSearch = useCallback(async ({summoner} : any) => {
    if(!summoner) return toast.error('Username não pode ser vazio ');
    setIsSideBar(false);
    setIsLoading(true);

    const {data: { puuid, name, profileIconId, summonerLevel }} = await GetSummoner(summoner);

    const img = `${process.env.REACT_APP_URL_IMG}/img/profileicon/${profileIconId}.png`;

    setSummonerData({
      puuid,
      name,
      profileIconId,
      summonerLevel,
      img,
    });
    setIsLoading(false);
    setIsModal(true);
  }, [isLoading]);

  const handleInsertSumonner = useCallback(async () => {
    setIsSaving(true);
    const summonerObj: SummonerData = {
      puuid: summonerData.puuid,
      name: summonerData.name,
    };

    await InsertSummoner(summonerObj)
    .then(res => toast.success(res.data.message))
    .catch(err => toast.error(err.response.data));

    setIsLoading(false);
    setSummonerData(null);
    setIsSaving(false);
    setIsModal(false);
  }, [summonerData]);

  return (
      <div className="vh-100 w-100 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <Form onSubmit={handleSearch}>
            <BasicInput
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="summoner"
              />
            <Button
              type="submit"
              variant="contained"
              className="p-3 rounded-0"
              >
              {isLoading ? "loading..." : "Search"}
            </Button>
          </Form>
        </div>
        <Modal isOpen={isModal} title="É quem você procura?">
            <Row className="pt-4">
              <Col>
                <img src={summonerData?.img} width='60px' className="rounded"/>
              </Col>
              <Col className="d-flex flex-column">
                <span className="fs-5 fw-bold">{summonerData?.name}</span>
                <span className="fs-6 fw-bolder">{summonerData?.summonerLevel}</span>
              </Col>
              <Col className="d-flex flex-column">
                {isSaving ? (
                  'Saving...'
                ) : (
                  <>
                  <ButtonGroup className="d-flex flex-column">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {setSummonerData(null); setIsLoading(false); setIsModal(false)}}
                    >
                      No
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleInsertSumonner}
                    >
                      Yes
                    </Button>
                  </ButtonGroup>
                  </>
                )}
              </Col>
            </Row>
          </Modal>
      </div>
  );
}
