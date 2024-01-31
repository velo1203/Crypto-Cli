#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const axios = require("axios");

async function getTicker(symbol, showDetails) {
    try {
        const response = await axios.get(
            `https://api.upbit.com/v1/ticker?markets=${symbol}`
        );
        const ticker = response.data[0]; // 첫 번째 티커 정보를 가져옵니다.

        if (showDetails) {
            // 상세 정보 출력
            console.log(`[${ticker.market}] 상세 정보`);
            console.log(`일자 (KST): ${ticker.trade_date_kst}`);
            console.log(`시간 (KST): ${ticker.trade_time_kst}`);
            console.log(`시가: ${ticker.opening_price.toLocaleString()} 원`);
            console.log(`고가: ${ticker.high_price.toLocaleString()} 원`);
            console.log(`저가: ${ticker.low_price.toLocaleString()} 원`);
            console.log(`종가: ${ticker.trade_price.toLocaleString()} 원`);
            console.log(
                `전일 종가: ${ticker.prev_closing_price.toLocaleString()} 원`
            );
            console.log(`변동: ${ticker.change === "RISE" ? "상승" : "하락"}`);
            console.log(
                `변동 가격: ${ticker.change_price.toLocaleString()} 원`
            );
            console.log(`변동률: ${(ticker.change_rate * 100).toFixed(2)}%`);
            console.log(`거래량: ${ticker.trade_volume.toLocaleString()} 개`);
            console.log(
                `누적 거래 가격(24H): ${ticker.acc_trade_price_24h.toLocaleString()} 원`
            );
            console.log(
                `누적 거래량(24H): ${ticker.acc_trade_volume_24h.toLocaleString()} 개`
            );
        } else {
            // 기본 정보 (현재 가격)만 출력
            console.log(
                `[${
                    ticker.market
                }] 현재 가격: ${ticker.trade_price.toLocaleString()} 원`
            );
        }
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

program
    .name("Crypto CLI")
    .description("가상화폐 실시간 가격을 알려줍니다.")
    .version("0.0.1");

program
    .command("get")
    .description("특정 가상화폐에 대한 정보를 검색합니다.")
    .argument("<symbol>", "검색할 가상화폐 심볼을 입력하세요")
    .option("--details", "가상화폐에 대한 자세한 정보를 표시합니다.")
    .action((symbol, options) => {
        const showDetails = options.details;
        console.log(`${symbol}에 대한 정보를 검색합니다.`);
        getTicker(symbol, showDetails);
    });

program.parse(process.argv);
