import { Line } from "react-chartjs-2";

const Graphic = () => {
  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              data: [
                { x: 10.8, y: 30 },
                { x: 11.2, y: 40 },
                { x: 12.7, y: 30 },
                { x: 13.1, y: 90 },
                { x: 14, y: 72 },
                { x: 15.2, y: 10 },
              ],
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
              min: 16 - 6,
              max: 16,
              ticks: {
                stepSize: 2,
                disaply: "none",
              },
            },
          },
        }}
        height={150}
        width={500}
      />
    </div>
  );
};

export default Graphic;
