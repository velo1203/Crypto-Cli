# crypto-cli

가상화폐 정보를 쉽게 조회할 수 있는 CLI 프로그램입니다.

# 설치

```bash
npm install -g @devho/crypto-cli
```

## 사용법

```bash
crypto [command] [options]
```

### Commands

`get` : 가상화폐 정보를 조회합니다.

```bash
crypto get [symbol] [options]
```

**exmaple**

```bash
crypto get KRW-BTC
```

**결과**

```
KRW-BTC에 대한 정보를 검색합니다.
[KRW-BTC] 현재 가격: 58,686,000 원
```

### Options

`--details` : 세부적인 디테일을 표시합니다.

```
KRW-BTC에 대한 정보를 검색합니다.
[KRW-BTC] 상세 정보
일자 (KST): 20240131
시간 (KST): 194555
시가: 58,966,000 원
고가: 59,200,000 원
저가: 58,650,000 원
종가: 58,694,000 원
전일 종가: 58,965,000 원
변동: 하락
변동 가격: 271,000 원
변동률: 0.46%
거래량: 0.049 개
누적 거래 가격(24H): 209,492,633,086.878 원
누적 거래량(24H): 3,540.148 개
```
