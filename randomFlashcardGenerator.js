// The object is a dictionary of common medical abbreviations.
// The next iteration will be a random flash-card generator.

const abbreviations = {
    ABC: 'arterial blood gas',
    'A/C': 'assist control',
    ACLS: 'advanced cardiac life support',
    ADH: 'antidiuretic hormone',
    AED: 'automated external defibrillator',
    AGA: 'appropiate for gestational age',
    AHI: 'apnea-hypopnea index',
    AIDS: 'acquired immunodeficiency syndrome',
    'A-P': 'antero-posterior',
    ARDS: 'acute respiratory destress syndrome',
    atm: 'standard atmosphere',
    AV: 'atroventricular',
    BAL: 'bronchoalveolar lavage',
    BAN: 'breath-actuated nebulizer',
    BD: 'base deficit',
    BE: 'base excess',
    'Bi-PAP': 'bilevel positive airway pressure',
    BPD: 'bronchopulmonary dysplasia',
    BSA: 'body surface area',
    BTPS: 'body temperature and pressure saturation',
    BUN: 'blood urea nitrogen',
    Ca: 'calcium',
    CaO2: 'total arterial oxygen content',
    'C(a-v)O2': 'arterial-venous oxygen content',
    CBC: 'complete blood count',
    CCU: 'coronary care unit',
    CGA: 'Compressed Gas Association',
    CHF: 'congestive heart failure',
    CI: 'cardiac index',
    CL: 'lung compliance',
    'Cl-': 'chloride ion',
    CMV: 'continuous mechanical ventilation',
    CNS: 'centreal nervous system',
    CO: 'carbon monoxide',
    CO2: 'carbon dioxide',
    COPD: 'chronic obstructive pulmonary disease',
    CPAP: 'continuous positive airway pressure',
    CPR: 'cardiopulmonary resuscitation',
    CPT: 'chest physical therapy',
    CT: 'computed tomography',
    CVO2: 'total oxygen content of mixed venous blood',
    CVP: 'central venous pressure',
    DIC: 'disseminated intravascular coagulation',
    DISS: 'Diameter Index Safety System',
    DKA: 'diabetic ketoacidosis',
    DL: 'diffusion cpapcity of the lung',
    DLCO: 'carbon monoxide diffusion capacity',
    DNR: 'do-not-resuscitate',
    DPG: 'diphosphoglycerate',
    DPI: 'dry powder inhaler',
    EBUS: 'endobronchial ultrasound',
    ECG: 'electrocardiogram',
    ECMO: 'extracorporeal membrane oxygenation',
    EEG: 'electroencephalogram',
    EIA: 'exercise-induced asthma',
    ENB: 'electromagnetic navigation bronchoscopy',
    EMS: 'emergency medical service',
    EPAP: 'expiratory positive airway pressure',
    ERV: 'expiratory reserve volume',
    ET: 'endotracheal',
    ETC: 'esophageal-tracheal combitube',
    'FEF200-1200': 'forced expiratory flow after first 200 mL',
    'FEF25%-75%': 'forced expiratory flow, midexpiratory phase',
    FENO: 'fractional concentration of exhaled nitric oxide',
    FET: 'forced expiratory technique',
    'FEV0.5': 'forced expiratory volume in 0.5 seconds',
    FEV1: 'forced expiratory volume in 1 second',
    FEV3: 'forced expiratory volume in 3 seconds',
    FEV6: 'forced expiratory volume in 6 seconds',
    FIO2: 'fractional inspired O2 concentration',
    Fr: 'French',
    FRC: 'functional residual capacity',
    FVC: 'forced vital capacity',
    GI: 'gastrointestinal',
    GOLD: 'GLobal Initiative for Chronic Obstructive Lung Disease',
    Hb: 'hemoglobin',
    HBCO: 'carboxyhemoglobin',
    HBO: 'hyperbaric oxygen',
    HbO2: 'oxyhemoglobin',
    HCO3: 'bicarbonate',
    Hct: 'hematocrit',
    HEPA: 'high-efficiency particulate air (filter)',
    HFCWO: 'high-efficiency chest wall oscillation',
    HFO: 'high-frequency oscillation',
    HFT: 'high-flow therapy',
    HFV: 'high-frequency ventilation',
    HHN: 'handheld neblizer',
    HIV: 'human immunodeficiency virus',
    HMD: 'hyaline membrane disease',
    HME: 'heat moisture exchanger',
    IBW: 'ideal body weight',
    IC: 'inspiratory capacity',
    ICP: 'intracranial pressure',
    ICU: 'intensive care unit',
    ID: 'internal diameter',
    'I:E': 'inspiratory:expiratory (ratio)',
    INH: 'isoniazid',
    IO: 'intraosseous infusion',
    IPAP: 'inspiratory positive airway pressure',
    IPPB: 'intermittent psitive pressure breathing',
    IPV: 'intrapulmonary percussive ventilation',
    IRV: 'inspiratory reserve volume',
    IT: 'implantiation tested',
    IV: 'intravenous',
    J: 'joules',
    JVD: 'jugular venous distention',
    'K+': 'potassium ion',
    LGA: 'large for gestational age',
    LMA: 'laryngeal mask airway',
    LTB: 'laryngotracheobronchitis',
    LVEDP: 'left ventricular end-diastolic pressure',
    LVF: 'left ventricular failure',
    MAP: 'mean airway pressure',
    Mc: 'megacycle',
    mcg: 'microgram',
    MDI: 'metered-dose inhaler',
    MEP: 'maximal expiratory pressure',
    MET: 'medical emergency team',
    MI: 'myocardial infarction',
    MIP: 'maximal inspiratory pressure',
    MPAP: 'mean pulmonary artery pressure',
    MRI: 'magnetic resonance imaging',
    MSAP: 'mean systemic arterial pressure',
    MVV: 'maximum voluntary ventilation',
    'Na+': 'sodium ion',
    NAEPP: 'National Asthma Education Prevention Program',
    NBRC: 'National Board for Respiratory Care',
    NG: 'nasogastric',
    NIF: 'negative inspiratory force',
    NO: 'nitric oxide',
    NPPV: 'noninvasive positive pressure ventilation',
    NSAID: 'nonsteroidal antiinflammatory drug',
    O2: 'oxygen',
    OD: 'outside diameter',
    'P-A': 'postero-anterior',
    'P(A-a)O2': 'alveolar-arterial oxygen pressure difference',
    PAC: 'premature atrial contraction',
    PaCO2: 'partial pressure of arterial carbon dioxide',
    PALS: 'pediatric advanced life support',
    PAO2: 'partial pressure of alveolar oxygen',
    PaO2: 'partial pressure of arterial oxygen',
    PAP: 'pulmonary artery pressure',
    PAW: 'mean airway pressure',
    PAWP: 'pulmonary artery wedge pressure',
    PB: 'barometric pressure',
    PCO2: 'partial pressure of carbon dioxide',
    PCV: 'pressure control ventilation',
    PCWP: 'pulmonary capillary wedge pressure',
    PDA: 'paten ductus arteriosus',
    PE: 'pulmonary embolism',
    PEA: 'pulseless electrical activity',
    PEEP: 'positive end-expiratory presseure',
    PEF: 'peak expiratory flow',
    PEP: 'positive expiratory pressure',
    PET: 'positron emission tomography',
    PETCO2: 'end-tidal carbon dioxide tension',
    PFC: 'pulmonary function test',
    PIF: 'peak inspiratory flow',
    PIP: 'peak inspiratory pressure',
    pK: 'dissociation constant (6.1)',
    PO2: 'partial pressure of oxygen',
    POC: 'point of care',
    Ppb: 'parts per billion',
    PPHN: 'persistent pulmonary hypertension of the newborn',
    ppm: 'parts per billion',
    PROM: 'premature rupture of membranes',
    psi: 'pounds per square inch',
    psig: 'pounds per square inch gauge',
    PSV: 'pressure support ventilation',
    PT: 'prothrombin time',
    PtcPo2: 'transcutaneous PO2',
    PTT: 'partial thromboplastin time',
    PVC: 'premature ventricular contraction',
    PvO2: 'partial ressure of oxygen, mixed venous blood',
    PVR: 'pulmonary vascular resistance',
    QS: 'shunted blood',
    QT: 'cardiac output (L/min)',
    RBC: 'red blood cell',
    RCP: 'respiratory care practitioner',
    RDS: 'respiratory distress syndrome',
    ROP: 'retinopathy of prematurity',
    RR: 'respiratory rate',
    RRT: 'rapid response team',
    RSV: 'respiratory syncytial virus',
    RV: 'residual volume',
    SA: 'sinoatrial',
    SaO2: 'hemoglobin saturation with oxygen, arterial blood',
    SARS: 'sever acute respiratory syndrome',
    SBT: 'spontaneous breathing trial',
    SGA: 'small for gestational age',
    SIDS: 'sudden infant death syndrome',
    SIMV: 'synchronized intermittent mandatory ventilation',
    SMI: 'sustained maximal inspiration',
    'SMI(device)': 'soft mist inhaler',
    SPAG: 'small particle aerosol generator',
    SpO2: 'pulse oximetry',
    SV: 'stroke volume',
    SvO2: 'hemoglobin stauration with oxygen, mixed',
    SVR: 'systemic vascular resistance',
    TB: 'tuberculosis',
    TDP: 'therapist-driven protocol',
    TLC: 'total lung capacity',
    UAC: 'umbilical artery catheter',
    USN: 'ultrasonic nebulizer',
    VA: 'alveolar minute volume',
    VAP: 'ventilator-associated pneumonia',
    VC: 'vital capacity of volume control (ventilation)',
    VD: 'dead space volume',
    VE: 'minute volume',
    VO2: 'oxygen consumption per unit of time',
    'V/Q': 'ventilation/perfusion (ration)',
    VT: 'tidal volume',
    VTG: 'thoracic gas volume',
    WBC: 'white blood cell'
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function ding() {
  var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
  return audio.play();
}

function evilLaugh() {
  var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
  return audio.play();
}


function randomCardGenerator(obj) {
    
    const keys = Object.keys(obj); // Array of abbreviations
    let correctTally = 0;
    let wrongTally = 0;
    
    for (let i = 1; i <= keys.length; i++) {
        let cardIndex = getRandomIntInclusive(1, keys.length);
        let randomAbbr = keys[cardIndex];
        let correspondingDefinition = obj[randomAbbr];
            console.log(`${randomAbbr} 👉🏻 ${correspondingDefinition}`);

        let answer = prompt(`${randomAbbr}`);

        if (!correspondingDefinition) {
            console.log(`Triggered deleted property: ${randomAbbr} 👉🏻 ${correspondingDefinition}`);
            continue;
        }
        
        if (answer == 'break') {
            evilLaugh();
            return;
        }
    
        if (answer === obj[randomAbbr]) {
            correctTally++;
            delete obj[randomAbbr];
            console.log(`${i} of ${keys.length} \n
                \t ${correctTally} Correct \n
                \t ${wrongTally} Wrong`);
        } else {
            window.alert("WRONG! 😪");
            wrongTally++;
        }
        
        // if (answer == correspondingDefinition) {
        //     console.log(ding(), answer, correspondingDefinition);
        //     continue
        // }
        
    }
}

randomCardGenerator(abbreviations);