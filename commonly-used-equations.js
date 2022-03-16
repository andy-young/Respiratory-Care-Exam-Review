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
    
    actualHeO2flowRate(orderedFlow) {
        const correctedFlow_1 = orderedFlow / 1.8;
        const correctedFlow_2 = orderedFlow / 1.6;
        return `The actual flow rate of He/O2 mixtures is ${correctedFlow_1} Lpm or ${correctedFlow_2} Lpm.`;
    },
    
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
    
    TubingCompliance(VT, PIP) {
        const tc = VT / PIP;
        return `The Tubing Compliance is ${tc}.`;
    },
    
    VTdelivered(VT, TubingCompliance, PIP, PEEP) {
        const DynamicCompliance = VT / (PIP - PEEP);
        const StaticCompliance = VT / PlateauPressure;
    },
    
    DynamicCompliance(VT, PIP, PEEP) {
        const dc = VT / (PIP - PEEP);
        return `The Dynamic Compliance is ${dc}.`;
    },
    
    StaticCompliance(VT, PlateauPressure, PEEP) {
        const sc = VT / (PlateauPressure - PEEP);
        return `The Static Compliance is ${sc}.`;
    },
    
    InspFlowRate(VT, iTime) {
        const flowRate = VT / iTime;
        return `The Inspiratory flowrate is ${flowRate} L/s or ${flowRate * 60} L/min.`;
    },
    
    IEratio(InspFlowRate, MinuteVolume) { // MV = RR * VT
        const IE = (InspFlowRate / MinuteVolume) - 1;
        return `The I:E ration is 1:${IE}.`;
    },
    
    ITime(IEratio, VentilatorRate) {
        const totalCycleTime = 60 / VentilatorRate;
        const iTime = totalCycleTime / (IEratio + 1);
        return `The ITime is ${iTime}.`;
    },
    
    VDVTratio(PaCO2, PECO2) {
        const deadSpaceVentilation = (PaCO2 - PECO2) / PaCO2;
        return `The Dead Space Ventilation is ${deadSpaceVentilation} mL.`;
    },
    
    AirwayResistance(PIP, PlateauPressure, flowRate) {
        const ar = (PIP - PlateauPressure) / flowRate;
        return `The Airwary Resistance is ${ar}.`;
    },

    desiredFiO2(desiredPaO2, currentPaO2, FiO2) {
        const desiredFiO2 = (desiredPaO2 * FiO2) / currentPaO2;
        return `The Desired FiO2 is ${desiredFiO2}%.`;
    },
    
    desiredVentRate(currentRate, currentPaCO2, desiredPaCO2) {
        const desiredRR = (currentRate * currentPaCO2) / desiredPaCO2;
        return `The desired ventilator rate is ${desiredRR} breaths per minute.`;
    },
    
    desiredVE(currentVE, currentPaCO2, desiredPaCO2) {
        const desiredMinuteVolume = (currentVE * currentPaCO2) / desiredPaCO2;
        return `The desired Minute Volume (VE) is ${desiredMinuteVolume}.`;
    },
    
    desiredVT(currentVT, currentPaCO2, desiredPaCO2) {
        const desiredTidalVolume = (currentVT * currentPaCO2) / desiredPaCO2;
        return `The desired Tidal Volume is ${desiredTidalVolume} mL.`;
    }
};