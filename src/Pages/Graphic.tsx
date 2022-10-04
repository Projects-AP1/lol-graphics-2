import { useLayoutEffect } from "react";
import chartColumn from "Utils/chartColumImg";

const data = [
    {
      name: "Monica",
      steps: 45688,
      pictureSettings: {
        src: "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg",
      },
    },
    {
      name: "Joey",
      steps: 35781,
      pictureSettings: {
        src: <img src="https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg"></img>,
      },
    },
    {
      name: "Ross",
      steps: 25464,
      pictureSettings: {
        src: "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg",
      },
    },
    {
      name: "Phoebe",
      steps: 18788,
      pictureSettings: {
        src: "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg",
      },
    },
    {
      name: "Rachel",
      steps: 15465,
      pictureSettings: {
        src: "https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg",
      },
    },
    {
      name: "Chandler",
      steps: 11561,
      pictureSettings: {
        src: "https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg",
      },
    },
  ];

export default function Graphics () : JSX.Element {
    useLayoutEffect(() => {
        const {root, legendRoot} = chartColumn(data);
     
        return  () => {root && root.dispose(); legendRoot.dispose();}
      }, []);

      return <>
        <div id="chartdiv" style={{ height: "500px" }}></div>
        <div id="legend-div"></div>
      </>
};