import React from "react";
import { ResponsiveLineCanvas } from "@nivo/line";
import * as time from "d3-time";
import { timeFormat } from "d3-time-format";

import hook from "./data.js";

function MyResponsiveLine() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    hook.then((res) => setData(res));
  }, []);
  return (
    <ResponsiveLineCanvas
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{
        type: "time",
        format: "%Y-%m-%dT%I:%M:%SZ",
        precision: "day",
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "log",
        base: 10,
        stack: true,
        min: "auto",
        max: "auto",
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: "%y %b %d",
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Date",
        legendOffset: 36,
        legendPosition: "middle",
        // tickValues: "every 30 days",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "confirmed",
        legendOffset: -40,
        legendPosition: "middle",
        tickValues: [10, 100, 1000, 10000, 100000, 1000000, 10000000],
      }}
      colors={{ scheme: "nivo" }}
      pointSize={1}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default MyResponsiveLine;
