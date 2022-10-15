import { useLayoutEffect, useEffect, useState} from "react";
import chartColumn from "Utils/chartColumImg";
import { getSumonnerGrath } from "@Hooks/api";

import { SummonerGraphData } from '@Interfaces/index';

export default function SummonerLevelGraph() {
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
        <div id="chartdiv" className="vw-100 vh-100"></div>
        <div id="legend-div"></div>
      </>
  );
}
