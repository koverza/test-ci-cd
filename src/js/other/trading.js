import { createChart, CandlestickSeries, LineSeries, HistogramSeries } from 'lightweight-charts';

export function trading() {
    console.log('trading works');

    // Инициализация графика в контейнере
    const container = document.getElementById('chart');
    const chart = createChart(container, {
        width: 800,
        height: 400,
        layout: { background: { type: 'solid', color: '#ffffff' }, textColor: '#000' }
    });

    // Данные цен (пример массива с полями time, open, high, low, close, volume)
    const candlestickData = [
        { time: '2025-03-01', open: 98.82, high: 99.66, low: 96.75, close: 97.67, volume: 187800 },
        { time: '2025-03-02', open: 98.99, high: 99.85, low: 97.73, close: 98.12, volume: 190000 },
        { time: '2025-03-03', open: 96.9, high: 97.08, low: 96.4, close: 97.04, volume: 109300 },
        { time: '2025-03-04', open: 95.19, high: 97.23, low: 95.0, close: 96.61, volume: 118000 },
        { time: '2025-03-05', open: 98.2, high: 100.67, low: 97.67, close: 99.69, volume: 157100 },
        {
            time: '2025-03-06',
            open: 101.63,
            high: 102.34,
            low: 98.52,
            close: 99.01,
            volume: 138700
        },
        { time: '2025-03-07', open: 99.32, high: 100.78, low: 98.9, close: 100.11, volume: 176300 },
        { time: '2025-03-08', open: 100.5, high: 101.2, low: 99.3, close: 100.05, volume: 165400 },
        { time: '2025-03-09', open: 99.47, high: 100.02, low: 98.11, close: 98.76, volume: 154600 },
        { time: '2025-03-10', open: 98.76, high: 99.5, low: 97.2, close: 97.85, volume: 143200 },
        { time: '2025-03-11', open: 96.12, high: 97.25, low: 95.75, close: 96.8, volume: 132500 },
        { time: '2025-03-12', open: 97.5, high: 98.1, low: 95.55, close: 96.07, volume: 158700 },
        { time: '2025-03-13', open: 95.0, high: 96.45, low: 94.5, close: 95.33, volume: 167900 },
        { time: '2025-03-14', open: 95.5, high: 96.0, low: 94.2, close: 95.1, volume: 149000 },
        { time: '2025-03-15', open: 94.8, high: 95.75, low: 94.0, close: 95.6, volume: 140300 },
        { time: '2025-03-16', open: 96.2, high: 97.5, low: 95.8, close: 97.1, volume: 130400 },
        { time: '2025-03-17', open: 97.5, high: 98.2, low: 96.7, close: 97.05, volume: 155000 },
        { time: '2025-03-18', open: 96.8, high: 97.3, low: 95.5, close: 96.0, volume: 144700 },
        { time: '2025-03-19', open: 96.1, high: 96.88, low: 95.0, close: 95.2, volume: 160500 },
        { time: '2025-03-20', open: 94.87, high: 95.18, low: 94.08, close: 94.85, volume: 107000 }
    ];

    // 1. Добавляем серию свечного графика и устанавливаем данные
    const candlestickSeries = chart.addSeries(CandlestickSeries, {
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350'
    });
    candlestickSeries.setData(candlestickData);

    // 2. Расчет скользящей средней (MA) за 5 дней и отображение
    const MA_PERIOD = 5;
    const maData = [];
    for (let i = 0; i < candlestickData.length; i++) {
        if (i < MA_PERIOD) {
            maData.push({ time: candlestickData[i].time });
        } else {
            let sum = 0;
            for (let j = i - MA_PERIOD + 1; j <= i; j++) {
                sum += candlestickData[j].close;
            }
            const avg = sum / MA_PERIOD;
            maData.push({ time: candlestickData[i].time, value: Number(avg.toFixed(2)) });
        }
    }
    const maSeries = chart.addSeries(LineSeries, { color: 'blue', lineWidth: 2 });
    maSeries.setData(maData);

    // 3. Расчет RSI (14) и отображение
    const RSI_PERIOD = 14;
    const rsiData = [];
    for (let i = 0; i < candlestickData.length; i++) {
        if (i < RSI_PERIOD) {
            rsiData.push({ time: candlestickData[i].time });
        } else {
            let gains = 0,
                losses = 0;
            for (let j = i - RSI_PERIOD + 1; j <= i; j++) {
                const change = candlestickData[j].close - candlestickData[j - 1].close;
                if (change >= 0) gains += change;
                else losses += -change;
            }
            const avgGain = gains / RSI_PERIOD;
            const avgLoss = losses / RSI_PERIOD;
            const rs = avgLoss === 0 ? Infinity : avgGain / avgLoss;
            const rsi = avgLoss === 0 ? 100 : 100 - 100 / (1 + rs);
            rsiData.push({ time: candlestickData[i].time, value: Number(rsi.toFixed(2)) });
        }
    }
    const rsiSeries = chart.addSeries(LineSeries, {
        color: 'orange',
        lineWidth: 1,
        priceScaleId: ''
    });
    rsiSeries.priceScale().applyOptions({ scaleMargins: { top: 0.65, bottom: 0.2 } });
    rsiSeries.setData(rsiData);

    // 4. Добавление гистограммы объема
    const volumeSeries = chart.addSeries(HistogramSeries, {
        priceFormat: { type: 'volume' },
        priceScaleId: ''
    });
    volumeSeries.priceScale().applyOptions({ scaleMargins: { top: 0.8, bottom: 0 } });
    const volumeData = candlestickData.map((point, i) => {
        const prevClose = i > 0 ? candlestickData[i - 1].close : point.close;
        const color = point.close >= prevClose ? '#26a69a' : '#ef5350';
        return { time: point.time, value: point.volume, color: color };
    });
    volumeSeries.setData(volumeData);

    // 5. Настройка отступов основной ценовой шкалы, чтобы не перекрывать индикаторы
    candlestickSeries.priceScale().applyOptions({
        scaleMargins: { top: 0.05, bottom: 0.3 }
    });
}
