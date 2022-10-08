import { useLayoutEffect, useEffect, useState} from "react";
import chartColumn from "Utils/chartColumImg";
import { getSumonnerGrath } from "@Hooks/api";

import { SummonerGraphData } from '@Interfaces/index';

export default function SummonerLevelGraph(): JSX.Element {
  const [summonersData, setSummonersData] = useState<SummonerGraphData[]>([]);

  useEffect(()=> {
    (async ()=> {
      const {data} = await getSumonnerGrath();
      const summonersGraphData : SummonerGraphData[] = data.map(((summoner : any) => ({
        name: summoner.name,
        steps: parseInt(summoner.nivel),
        pictureSettings: {
          src: summoner.urlimg
        }
      })));
    
      console.log(summonersGraphData.sort())
      setSummonersData(summonersGraphData);
    })();
  }, []);

  useLayoutEffect(() => {
    const { root, legendRoot } = chartColumn(summonersData);  

    return () => {
      root.dispose();
      legendRoot.dispose();
    };
  }, [summonersData]); 

  return (
      <>
        {!summonersData.length && 'Loading...'}
        <div id="chartdiv" style={{ height: "500px" }}></div>
        <div id="legend-div"></div>
      </>
  );
}
