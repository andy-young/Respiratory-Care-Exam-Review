const eq = {
    eTankTime(flowRate, tankPSI, stopPSI=0) {
        const time = (tankPSI - stopPSI) * 0.3 / flowRate / 60;
        return `E cylinder duration: ${time} hours.`;
    },
    
    hTankTime(flowRate, tankPSI, stoPSI=0) {
        const time = (tankPSI - stopPSI) * 3 / flowRate / 60;
        return `H cylinder duration: ${time} hours.`;
    },
    
    liquidSysTime(flowRate, lbs) {
        const time = lbs * 344 / flowRate / 60;
        return `Liquid O2 duration: ${time} hours.`;
    },
    
    AV_diff(Hb, SaO2, SVO2) {
        const CaO2 = 1.34 * Hb * SaO2;
        const CVO2 = 1.34 * Hb * SVO2;
        const AV_diff = CaO2 - CVO2;
        return `The total arterial and venous O2 content is ${AV_diff}.`
    },
    
    totalFlow(FiO2, flowRate) {
        const RA = FiO2 - 20;
        const O2 = 100 - FiO2;
        const q = O2/RA;
        const totalParts = q + 1;
        return `Total flow delivered: ${totalParts * flowRate} L/min.`
    },
    
    HeO2Flow() {},
    
    relativeHumidity(absHumidity, capacity) {
        const rh = (absHumidity / capacity) * 100;  // absHumidity is amount of H2O in a given volume of gas.
        return `Relative Humidity is ${rh}.`;       // capacity is the total amount of water capable of being held in the gas at a given temperature.
    },
    
    bodyHumidity(absHumidity) {
        const bh = (absHumidity / 44) * 100;
        return `Body Humidity is ${bh}.`;
    },
    
    humidityDeficit(absHumidity) {
        const hd = 44 - absHumidity;
        const hdPercent = hd / 44;
        return `The Humidity Deficit is ${hd}, or ${hdPercent}%.`;
    },
    
    PAO2(percentO2, PaCO2) {  // Partial Pressure of Aveolar Oxygen
        const PAO2 = (7 * percentO2) - (PaCO2 + 10);
        return `The Partial Pressure of Aveolar Oxygen is ${PAO2}.`;
    },
    
    AaGradient(PAO2, PaO2) { // Alveolar-arterial oxygen pressure difference
        const aaGrad = PAO2 - PaO2;
        return `The A-a gradient is ${aaGrad}.`;
    },
    
    QSQT(AaGradient) {
        const shunt = (AaGradient / 20) + 4 + "%";
        return `The Pulmonary Shunt is ${shunt}.`;
    },
    
    SVR(QT, MSAP, CVP) { // CVP: central venous pressure
        const SVR = (MSAP - CVP) / QT;
        return `The systemic vascular resistance is ${SVR} mmHg/L/min.`;
    },
    
    PVR(MPAP, PCWP, QT) { // Mean Pulmonary artery pressure & Pulmonary capillary wedge pressure
        const PVR = (MPAP - CVP /*mmHg*/) / QT;
        return `The Pulmonary vascular resistance is ${PVR} mmHg/L/min.`;
    },
    
    QT(VO2, CaO2, CVO2) { // VO2 = Oxygen Consumption, CaO2 = Cardiac content, CVO2 = Mixed Venous content
        const QT = VO2 / ((CaO2 - CVO2) * 10);
        return `The Cardiac Output is ${QT}.`;
    },
    
    IBW(heightInches) {
        const female = 105 + 5(heightInches - 60);
        const male = 106 + 6(heightInches - 60);
        return `IBW for female is ${female} lbs, and ${male} lbs for men`;
    },
    
    TubingCompliance() {
        
    },
    
    VTdelivered() {
        
    },
    
    DynamicCompliance() {
        
    },
    
    StaticCompliance() {
        
    },
    
    InspFlowRate() {
        
    },
    
    IEratio() {
        
    },
    
    ITime() {
        
    },
    
    VDVTratio() {
        
    },
    
    desiredFiO2() {
        
    },
    
    desiredVentRate() {
        
    },
    
    desiredVE() {
        
    },
    
    desiredVT() {
        
    }
};