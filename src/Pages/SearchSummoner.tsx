import { useCallback, useState } from "react";
import { Row, Col, ButtonGroup } from "reactstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { GetSummoner } from "@Hooks/externalApi";
import { InsertSummoner } from "@Hooks/api";
import { SummonerData } from "@Interfaces/index";
import { getImgAws } from "Utils/getFilesAWS";
 
export default function SearchSummoner(): JSX.Element {
  const [summoner, setSummoner] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  const [summonerData, setSummonerData] = useState<any>(null);

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    const {data: { puuid, name, profileIconId, summonerLevel }} = await GetSummoner(summoner);

    const img = await getImgAws(`profileicon/${profileIconId}.png`).then(res => res).catch(err => console.log(err));

    setSummonerData({
      puuid,
      name,
      profileIconId,
      summonerLevel,
      img,
    });
  }, [summoner, isLoading]);

  const handleInsertSumonner = useCallback(async () => {
    const summonerObj: SummonerData = {
      puuid: summonerData.puuid,
      name: summonerData.name,
    };

    const summoner = await InsertSummoner(summonerObj);
    console.log(summoner);
    setIsLoading(prev => !prev);
  }, [summonerData, isLoading]);

  return (
      <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setSummoner(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            className="p-3 rounded-0"
          >
            {isLoading ? "loading..." : "Search"}
          </Button>
        </div>
        {summonerData && (
          <Row>
            <Col>
              <img src={summonerData.img} />
            </Col>
            <Col className="d-flex flex-column">
              <span> {summonerData.name}</span>
              <span> {summonerData.summonerLevel}</span>
            </Col>
            <Col className="d-flex flex-column">
              <span>Este é você?</span>
              <ButtonGroup>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {setSummonerData(null); setIsLoading(false);}}
                >
                  Não
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleInsertSumonner}
                >
                  Sim
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        )}
      </div>
  );
}
