import { Line } from "react-chartjs-2";
import * as S from "./style";

const Graphic = ({ movimentations }) => {
  const movimentationsData = movimentations.map(({ date, value }) => ({
    x: date.substring(10, 16).replace(":", "."),
    y: value,
  }));

  return (
    <S.Container>
      <Line
        data={{
          datasets: [
            {
              data: movimentationsData,

              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.4,
              spanGaps: 100,
              radius: 5,
              borderWidth: 2,
              pointBorderColor: "rgba(27,96,88,1)",
              pointBackgroundColor: "rgba(255,255,255,1)",
              tickBorderDashOffset: 3,
              label: "",
              options: {
                legend: {
                  display: false,
                },
                tooltips: {
                  callbacks: {
                    label: function (tooltipItem) {
                      return tooltipItem.yLabel;
                    },
                  },
                },
              },
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel;
              },
            },
          },
          title: {
            display: true,
            text: "",
          },
          scales: {
            x: {
              type: "linear",
              min: 0,
              max: 24,
              ticks: {
                stepSize: 2,
                disaply: "none",
              },
            },
          },
        }}
      />
    </S.Container>
  );
};

export default Graphic;
