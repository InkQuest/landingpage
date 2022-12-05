import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import {Element} from 'react-scroll'

const TokenChart = () => {
  const colorPalette = [
    "#06A9B4",
    "#46EACC",
    "#CE30DD",
    "#6338DB",
    "#9448F0",
    "#2925EE",
    "#e35ab9"
  ];
  echarts.registerTheme("my_theme", {
    color: colorPalette,
    graph: colorPalette,
  });

  const option = {
    title: {
      text: "Total Supply",
      subtext: "100M",
      left: "center",
      top: "42%",
      textStyle: {
        fontFamily: `'ClashDisplay-Semibold', sans-serif`,
        fontSize: "20px",
        color: "black",
        fontWeight: 600,
      },
      subtextStyle: {
        fontFamily: `'ClashDisplay-Semibold', sans-serif`,
        fontSize: "50px",
        color: "#06a9b4",
        fontWeight: 600,
      },
    },
    tooltip: {
      show: false,
      textStyle: {
        width: 19,
      },
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}M",
    },
    legend: { show: false },
    series: [
      {
        name: "Info:",
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 15, name: "Airdrop/Bounty/ Partners" },
          { value: 15, name: "Public Sale" },
          { value: 20, name: "Staking Reward" },
          { value: 20, name: "Founding Team" },
          { value: 10, name: "Early Contributor" },
          { value: 10, name: "Liquidity" },
          { value: 10, name: "Support Funding Issuance" },
        ],
        label: {
          show: true,

          overflow: "break",
          width: 200,
          height: 30,
          formatter: ({ value, name }) =>
            "{name|" + name + ": }\n{value|" + value + "M}",
          rich: {
            name: {
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 26,
              color: "black",
            },
            value: {
              fontSize: 16,
              fontWeight: "medium",
              lineHeight: 26,
              color: "#06a9b4",
            },

            x: {
              fontSize: 18,
              fontFamily: "Microsoft YaHei",
              borderColor: "#449933",
              borderRadius: 4,
            },
          },
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 25,
          lineStyle: {
            width: 3,
          },
        },

        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        backgroundColor: "#faa",
      },
    ],
  };

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="black" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <Element name="four" className="element">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Tokenomics</h2>
          </div>
          </Element>
          {/* Items */}
          <div className="">
            <ReactECharts
              // opts={{ renderer: "svg" }} // use svg to render the chart.
              option={option}
              className="mx-auto"
              theme="my_theme"
              style={{
                height: "550px",
                width: "100%",
                maxWidth: "850px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenChart;
