const aviationTerms = [
  {
    "english": "Aerial",
    "japanese": "航空の、航空関係の、空の、空からの、航空機を使った、対空の",
    "romaji": "Aviation-related, aerial",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerial Gunnery",
    "japanese": "対空機銃、対空発砲",
    "romaji": "Anti-aircraft gunnery",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aero",
    "japanese": "航空全体を意味する略語、航空の",
    "romaji": "Aviation abbreviation (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerobatics",
    "japanese": "曲技飛行",
    "romaji": "Aerobatic flight (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerodrome",
    "japanese": "飛行場",
    "romaji": "Airfield (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerodynamic Force",
    "japanese": "航空力学的な力、空気の流れによって発生する力、操縦によって変化する力",
    "romaji": "Forces from airflow, controllable forces",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerodynamics",
    "japanese": "航空力学、航空機が空を飛行する際の原理、空気動力学",
    "romaji": "Aviation mechanics, flight principles",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aeromedical",
    "japanese": "航空関係者の健康、上空での人間に対する影響、航空身体",
    "romaji": "Aviation health, altitude effects",
    "category": "Medical",
    "illustration": "⚕️"
  },
  {
    "english": "Aeromedical Factors",
    "japanese": "航空機の従事に関しての健康上の影響、航空に従事する際の生理的な影響",
    "romaji": "Health impacts of aviation work (Japanese)",
    "category": "Medical",
    "illustration": "⚕️"
  },
  {
    "english": "Aeronautical Chart",
    "japanese": "航空図、チャート、航空機用の地図",
    "romaji": "Aviation charts, maps",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aeronautical Decision Making",
    "japanese": "航空機に従事する時の判断、航空に関して合理的に安全な判断を下す手順",
    "romaji": "Aviation decision-making process",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aeronautical Meteorology",
    "japanese": "航空気象学",
    "romaji": "Aviation meteorology (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerosinusitis",
    "japanese": "航空性副鼻腔炎、高空性洞炎",
    "romaji": "Aviation-induced sinus inflammation",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerostatics",
    "japanese": "空気静力学、動きの無い大気の学問、気球や飛行船の学問",
    "romaji": "Static air science, balloon/airship science",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aerotitis",
    "japanese": "航空中耳炎、気圧の変化による耳への悪影響、航空性中耳炎",
    "romaji": "Aviation-induced ear problems",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Affect",
    "japanese": "影響する、作用する、変化させる",
    "romaji": "To influence, affect",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Affected",
    "japanese": "影響、影響を受ける、変えられる",
    "romaji": "Influenced, affected",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Affecting",
    "japanese": "影響を受けている、影響する、有効である",
    "romaji": "Being affected, influencing",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Affirm",
    "japanese": "確認する、確認が出来る、はい､そうです、Ｙｅｓ",
    "romaji": "To confirm, yes",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Affirmative",
    "japanese": "確認が出来た、はい､そうです、Ｙｅｓ",
    "romaji": "Confirmed, affirmative",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "AFSS",
    "japanese": "操縦士に色々な気象や航空の情報を提供したりサービスを行う",
    "romaji": "Automated Flight Service Station (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aft",
    "japanese": "後ろの、後方の、後ろ、後部",
    "romaji": "Rear, aft",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aft Cg Limit",
    "japanese": "重心の後方限界",
    "romaji": "Aft center of gravity limit (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "After",
    "japanese": "後で、後の",
    "romaji": "After, later",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Afternoon",
    "japanese": "午後",
    "romaji": "Afternoon (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Agency",
    "japanese": "エイジェント、代理人、代理",
    "romaji": "Agent, agency",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "AGL",
    "japanese": "地面からの高さ、地上高",
    "romaji": "Above Ground Level (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Agonic Line",
    "japanese": "無偏差線",
    "romaji": "Agonic line (magnetic variation)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Ahead",
    "japanese": "前の、前方の、正面の",
    "romaji": "Ahead, forward",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aid",
    "japanese": "助ける、予備としてある、補助する",
    "romaji": "To aid, assist",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aileron",
    "japanese": "補助翼、飛行機の翼を上下させる物、飛行機のバンクを制御する部分",
    "romaji": "Control surface for banking (Japanese)",
    "category": "General",
    "illustration": "📐"
  },
  {
    "english": "Air Defence Identification Zone",
    "japanese": "防空識別圏",
    "romaji": "ADIZ (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air Force",
    "japanese": "空軍",
    "romaji": "Air Force (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air Inlet",
    "japanese": "空気取入口",
    "romaji": "Air inlet (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air Intake",
    "japanese": "空気取入口",
    "romaji": "Air intake (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air Mass",
    "japanese": "気団、同じ種類の大気の範囲や塊",
    "romaji": "Air mass (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air Route Surveillance Radar",
    "japanese": "空港路監視レーダー",
    "romaji": "ARSR (Japanese)",
    "category": "Navigation",
    "illustration": "📡"
  },
  {
    "english": "Air Traffic",
    "japanese": "航空交通、飛んでいる航空機",
    "romaji": "Air traffic (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air Traffic Control",
    "japanese": "航空交通管制、航空管制、ATC",
    "romaji": "ATC (Japanese)",
    "category": "ATC",
    "illustration": "🎮"
  },
  {
    "english": "Air Route Traffic Control Center",
    "japanese": "センターと呼ばれる管制官、ARTCC",
    "romaji": "ARTCC (Japanese)",
    "category": "ATC",
    "illustration": "🎮"
  },
  {
    "english": "Air Traffic Controller",
    "japanese": "航空交通管制官、管制官",
    "romaji": "Air traffic controller (Japanese)",
    "category": "ATC",
    "illustration": "🎮"
  },
  {
    "english": "Air Traffic Information",
    "japanese": "航空交通情報、飛行している航空機の情報",
    "romaji": "Air traffic information (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air Work",
    "japanese": "空中操行、訓練などの総称",
    "romaji": "Air work, training",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Air/Fuel Rate",
    "japanese": "燃料と空気の混合比",
    "romaji": "Air/fuel ratio",
    "category": "Engine",
    "illustration": "⛽"
  },
  {
    "english": "Airborne",
    "japanese": "浮上する、離陸する、浮く",
    "romaji": "Airborne (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airborne DME Receiver",
    "japanese": "機上ＤＭＥ装置、DME局からの距離を示す計器",
    "romaji": "DME equipment (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft",
    "japanese": "航空機、空を飛行する乗り物",
    "romaji": "Aircraft (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft Classification",
    "japanese": "航空機の区別、航空機の種類",
    "romaji": "Aircraft classification (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft Identification",
    "japanese": "機体番号、認識番号",
    "romaji": "Aircraft ID (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft Lighting",
    "japanese": "航空機の燈火、ライト",
    "romaji": "Aircraft lights (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft Logbooks",
    "japanese": "航空機の整備記録や整備日誌",
    "romaji": "Aircraft logbooks (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft Maintenance Records",
    "japanese": "航空機の整備記録・記録誌",
    "romaji": "Maintenance records (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft Registration Certificate",
    "japanese": "航空機登録証明書",
    "romaji": "Registration certificate (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Aircraft Type",
    "japanese": "航空機の型式、航空機の機種による区別",
    "romaji": "Aircraft type (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Airflow",
    "japanese": "気体の流れ、風の動き",
    "romaji": "Airflow (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airfoil",
    "japanese": "翼型、揚力・Liftを生み出す物・形",
    "romaji": "Airfoil (Japanese)",
    "category": "General",
    "illustration": "🛢️"
  },
  {
    "english": "Airframe",
    "japanese": "機体",
    "romaji": "Airframe (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airline Transport Pilot",
    "japanese": "定期運送用操縦士",
    "romaji": "ATP (Japanese)",
    "category": "General",
    "illustration": "👨‍✈️"
  },
  {
    "english": "Airman",
    "japanese": "航空機に従事する者、操縦士だけでなく色んな人を含む",
    "romaji": "Airman (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airman Medical Certificate",
    "japanese": "航空身体検査証明書、メディカル",
    "romaji": "Medical certificate (Japanese)",
    "category": "Medical",
    "illustration": "📜"
  },
  {
    "english": "Airmass",
    "japanese": "気団、同じ種類の大気の範囲や塊",
    "romaji": "Air mass (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airmen",
    "japanese": "操縦士、航空機を操縦したりする者",
    "romaji": "Airmen (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "AIRMET",
    "japanese": "特に小型機に対する天気現象に関する注意報",
    "romaji": "Weather advisory (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airpark",
    "japanese": "空港の呼び方の一つ",
    "romaji": "Type of airport (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airplane",
    "japanese": "飛行機",
    "romaji": "Airplane (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Airport Surveillance Radar",
    "japanese": "空港付近の航空機を監視や指示用のレーダー",
    "romaji": "Airport radar (Japanese)",
    "category": "Navigation",
    "illustration": "🏢"
  },
  {
    "english": "Airport",
    "japanese": "空港",
    "romaji": "Airport (Japanese)",
    "category": "General",
    "illustration": "🏢"
  },
  {
    "english": "Airport Lights",
    "japanese": "空港の照明設備",
    "romaji": "Airport lighting (Japanese)",
    "category": "General",
    "illustration": "🏢"
  },
  {
    "english": "Airport Rotating Beacon",
    "japanese": "空港燈台",
    "romaji": "Airport beacon (Japanese)",
    "category": "General",
    "illustration": "🏢"
  },
  {
    "english": "Airport/Facility Directory",
    "japanese": "空港や航法設備の詳しいデータが書かれた本",
    "romaji": "Airport directory (Japanese)",
    "category": "General",
    "illustration": "🏢"
  },
  {
    "english": "Airscoop",
    "japanese": "空気の取り入れ口",
    "romaji": "Air scoop (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airship",
    "japanese": "飛行船",
    "romaji": "Airship (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airspace",
    "japanese": "空域",
    "romaji": "Airspace (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airspace Designation",
    "japanese": "空域の種類、指定された空域の種類",
    "romaji": "Airspace designation (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airspeed",
    "japanese": "対気速度、大気に対しての速度",
    "romaji": "Airspeed (Japanese)",
    "category": "General",
    "illustration": "⏱️"
  },
  {
    "english": "Airspeed Indicator",
    "japanese": "対気速度計、航空機の速度計",
    "romaji": "Airspeed indicator (Japanese)",
    "category": "Instruments",
    "illustration": "⏱️"
  },
  {
    "english": "Airway",
    "japanese": "航空路",
    "romaji": "Airway (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airworthiness",
    "japanese": "耐空性、飛行機が安全に飛べる状態",
    "romaji": "Airworthiness (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airworthiness Certificate",
    "japanese": "耐空証明",
    "romaji": "Airworthiness certificate (Japanese)",
    "category": "General",
    "illustration": "📜"
  },
  {
    "english": "Airworthiness Directive",
    "japanese": "耐空性改善通報、強制力のある改善命令",
    "romaji": "AD (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Airworthy",
    "japanese": "安全に飛行できる、耐空性のある",
    "romaji": "Airworthy (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Back",
    "japanese": "後ろ、下がる",
    "romaji": "Rear, back",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Baggage",
    "japanese": "手荷物、荷物",
    "romaji": "Baggage, luggage",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Balance",
    "japanese": "バランス、均一にされた、安定する",
    "romaji": "Balance, stability",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Balanced",
    "japanese": "バランスの取れた、整っている、制限以内、安定、均一に",
    "romaji": "Balanced (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Ball Inclinometer",
    "japanese": "ボール傾斜計、単にボール",
    "romaji": "Ball in turn coordinator (Japanese)",
    "category": "General",
    "illustration": "📏"
  },
  {
    "english": "Ballast",
    "japanese": "重り、バランスをとる物",
    "romaji": "Ballast weight (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Ballonet",
    "japanese": "空気房、気室、ガス袋",
    "romaji": "Airship air chamber (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Balloon",
    "japanese": "気球、風船",
    "romaji": "Balloon (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Band",
    "japanese": "帯、区間、区域、幅、バンド",
    "romaji": "Band, range",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bank",
    "japanese": "傾斜、左右の傾き",
    "romaji": "Banking, roll",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bank Indicator",
    "japanese": "旋回計",
    "romaji": "Turn indicator (Japanese)",
    "category": "Instruments",
    "illustration": "📊"
  },
  {
    "english": "Banked",
    "japanese": "傾いた、バンクの付いた",
    "romaji": "Banked (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Banking",
    "japanese": "傾いている、傾けている、バンクしている",
    "romaji": "Banking (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Banner",
    "japanese": "引っ張っている物、飛行機で引っ張る垂れ幕",
    "romaji": "Banner towing (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bar",
    "japanese": "棒、横棒、長い物、姿勢計の針",
    "romaji": "Bar, needle",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Barometer",
    "japanese": "気圧計",
    "romaji": "Barometer (Japanese)",
    "category": "General",
    "illustration": "📏"
  },
  {
    "english": "Barometric",
    "japanese": "気圧の、大気の",
    "romaji": "Barometric (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Barometric Pressure",
    "japanese": "大気圧",
    "romaji": "Barometric pressure (Japanese)",
    "category": "General",
    "illustration": "📊"
  },
  {
    "english": "Barometric Tendency",
    "japanese": "気圧変化傾向、大気圧の変化傾向",
    "romaji": "Pressure tendency (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Base",
    "japanese": "定置場、最終着陸コースに垂直に向かうコース",
    "romaji": "Base leg, foundation",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Base of",
    "japanese": "～の底、～の元になる、～を理由に",
    "romaji": "Base of (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Based",
    "japanese": "所属、元になってる、保管している空港",
    "romaji": "Based at (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Basic",
    "japanese": "基本、簡単な",
    "romaji": "Basic (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Basic Aerodynamic Shape",
    "japanese": "航空力学から見た翼形",
    "romaji": "Basic airfoil shape (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Basic Flight Maneuver",
    "japanese": "基本的な飛行動作",
    "romaji": "Basic flight maneuvers (Japanese)",
    "category": "Flight Operations",
    "illustration": "💡"
  },
  {
    "english": "Basic VFR",
    "japanese": "VFRに最低必要な気象条件",
    "romaji": "Basic VFR conditions (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Battery",
    "japanese": "バッテリー、電池、電気を貯めて置く物",
    "romaji": "Battery (Japanese)",
    "category": "General",
    "illustration": "🔋"
  },
  {
    "english": "be Entered in",
    "japanese": "～に記入する",
    "romaji": "To be entered (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "be Secured",
    "japanese": "固定する",
    "romaji": "To be secured (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Beacon",
    "japanese": "存在を示す物、灯台、無線標識",
    "romaji": "Beacon (Japanese)",
    "category": "Navigation",
    "illustration": "💡"
  },
  {
    "english": "Bearing",
    "japanese": "方位",
    "romaji": "Bearing (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Become Familiar",
    "japanese": "慣れる、精通する、良く理解しておく",
    "romaji": "Become familiar (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Becoming",
    "japanese": "～に変化する",
    "romaji": "Becoming (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Been Approved",
    "japanese": "許可された認められた",
    "romaji": "Been approved (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Began",
    "japanese": "始まる、起こる",
    "romaji": "Began (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Below",
    "japanese": "以下、下に、下の",
    "romaji": "Below (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Belts",
    "japanese": "ベルト、固定するロープ類",
    "romaji": "Belts, restraints",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bending",
    "japanese": "曲がっている、曲げられている",
    "romaji": "Bending (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bends",
    "japanese": "潜函病、血液に溶け込んだガスが気化して起す病",
    "romaji": "Decompression sickness (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Beneath",
    "japanese": "～の下、以下",
    "romaji": "Beneath (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bernoulli's Theory",
    "japanese": "ベルヌーイの定理、流体の速度が上がると圧力が下がる定理",
    "romaji": "Bernoulli's principle",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Best Gliding Speed",
    "japanese": "最良滑空速度",
    "romaji": "Best glide speed (Japanese)",
    "category": "General",
    "illustration": "⏱️"
  },
  {
    "english": "Best Rate",
    "japanese": "最高の確立、最良の割合、最も良い比率",
    "romaji": "Best rate (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Beverages",
    "japanese": "飲み物",
    "romaji": "Beverages (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Beyond",
    "japanese": "～を超えて、オーバーして",
    "romaji": "Beyond (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Biannual",
    "japanese": "年に２回の",
    "romaji": "Biannual (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Biennial",
    "japanese": "隔年の、2年ごとの、二年に一度の",
    "romaji": "Biennial (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Biennial Flight Review",
    "japanese": "２年に一度、教官より安全に飛行が出来る事を確認してもらう事",
    "romaji": "BFR (Japanese)",
    "category": "Flight Operations",
    "illustration": "💡"
  },
  {
    "english": "Blade",
    "japanese": "刃、刀、刃物状の、ブレード、回転翼の翼部分",
    "romaji": "Blade (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Blade Angle",
    "japanese": "刀物の角度、この場合はプロペラの角度、羽根角",
    "romaji": "Blade angle (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Blast",
    "japanese": "突風、噴射する、発射、飛び出る、爆破、爆発",
    "romaji": "Blast (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Blimp",
    "japanese": "飛行船",
    "romaji": "Blimp (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Blind Spot",
    "japanese": "盲点、見えない所、隠れている部分",
    "romaji": "Blind spot (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Block",
    "japanese": "ブロック、塊、項目",
    "romaji": "Block (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Blow",
    "japanese": "吹く",
    "romaji": "Blow (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Blowers",
    "japanese": "吹く物、空気を出すもの",
    "romaji": "Blowers (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Blowing",
    "japanese": "吹いている、吹き付けている",
    "romaji": "Blowing (Japanese)",
    "category": "General",
    "illustration": "🪶"
  },
  {
    "english": "Board",
    "japanese": "板、盆、平らな物、委員会、官庁の部署",
    "romaji": "Board (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Body",
    "japanese": "体、本体、大きな物の中心部分",
    "romaji": "Body (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Boiling",
    "japanese": "沸騰、沸騰している、液体から気体へ変わる事",
    "romaji": "Boiling (Japanese)",
    "category": "General",
    "illustration": "🛢️"
  },
  {
    "english": "Boils",
    "japanese": "沸騰する、気化する",
    "romaji": "Boils (Japanese)",
    "category": "General",
    "illustration": "🛢️"
  },
  {
    "english": "Border",
    "japanese": "境界線、分かれ目",
    "romaji": "Border (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Both",
    "japanese": "両方",
    "romaji": "Both (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Boundary",
    "japanese": "境界線、分かれ目、境目、境",
    "romaji": "Boundary (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Brace",
    "japanese": "補強材、突っ張り、支柱、締め金、留め金具",
    "romaji": "Brace (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Brace Struts",
    "japanese": "ブレース・ストラット、支柱、支える構造部分",
    "romaji": "Brace struts (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Brake",
    "japanese": "ブレーキ、減速する物、減速する、止める物",
    "romaji": "Brake (Japanese)",
    "category": "General",
    "illustration": "🛑"
  },
  {
    "english": "Branch",
    "japanese": "担当部署、支社、管理している所",
    "romaji": "Branch (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Breathed",
    "japanese": "呼吸された、吸引した",
    "romaji": "Breathed (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Breathing",
    "japanese": "呼吸をしている、呼吸をする",
    "romaji": "Breathing (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Breathing Rate",
    "japanese": "呼吸の割合",
    "romaji": "Breathing rate (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Breeze",
    "japanese": "そよ風",
    "romaji": "Breeze (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Briefing",
    "japanese": "ブリーフィング、情報を分かち合う、評価と説明",
    "romaji": "Briefing (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bring",
    "japanese": "持ってくる、意味を持つ",
    "romaji": "Bring (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Broadcast",
    "japanese": "放送、放送する、伝える、みんなに言う",
    "romaji": "Broadcast (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Broadcasting Station",
    "japanese": "放送局、ラジオ放送局、電波を発信する施設",
    "romaji": "Broadcasting station (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Broken",
    "japanese": "雲量５／８～７／８の空を覆う雲",
    "romaji": "Broken clouds (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Bubble",
    "japanese": "泡、気泡",
    "romaji": "Bubble (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Buoyancy",
    "japanese": "浮力が有る、浮力について",
    "romaji": "Buoyancy (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Buoyant",
    "japanese": "浮力、浮く事",
    "romaji": "Buoyant (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Burner",
    "japanese": "バナー、炎を出す物",
    "romaji": "Burner (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Burning",
    "japanese": "燃えている、燃焼している",
    "romaji": "Burning (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Business",
    "japanese": "ビジネス、商用、関わり、関係",
    "romaji": "Business (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Butane",
    "japanese": "燃料の一種、熱気球用の燃料、ブタン",
    "romaji": "Butane (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Buyer",
    "japanese": "購入者、買手、購入を考えている人",
    "romaji": "Buyer (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Cabin",
    "japanese": "キャビン、室内、機室",
    "romaji": "Aircraft cabin (Japanese)",
    "category": "General",
    "illustration": "💺"
  },
  {
    "english": "Cabin Altitude",
    "japanese": "機室高度、与圧され気圧を高度で表した物",
    "romaji": "Pressurized cabin altitude (Japanese)",
    "category": "General",
    "illustration": "📏"
  },
  {
    "english": "Cabin Pressure Altitude",
    "japanese": "機内の気圧高度",
    "romaji": "Cabin pressure altitude (Japanese)",
    "category": "General",
    "illustration": "📏"
  },
  {
    "english": "Cable",
    "japanese": "ケーブル、ワイヤー、柔らかい針金の束で制御したり通信する物",
    "romaji": "Control cables (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calculate",
    "japanese": "計算する",
    "romaji": "To calculate (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calendar",
    "japanese": "カレンダー、月単位の",
    "romaji": "Calendar (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calendar Months",
    "japanese": "暦月、月単位で計算する",
    "romaji": "Calendar months (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calibrated",
    "japanese": "修正された、取付誤差を修正した、調節した",
    "romaji": "Calibrated (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calibrated Airspeed",
    "japanese": "修正対気速度、取り付けによる誤差を修正した対気速度",
    "romaji": "CAS (Japanese)",
    "category": "General",
    "illustration": "⏱️"
  },
  {
    "english": "Calibrated Altitude",
    "japanese": "修正高度、高度計の取付誤差を修正した物",
    "romaji": "Calibrated altitude (Japanese)",
    "category": "General",
    "illustration": "📏"
  },
  {
    "english": "Call",
    "japanese": "呼ぶ、呼び出す、無線で呼ぶ、送信する",
    "romaji": "Radio call (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calling",
    "japanese": "送信している、呼んでいる、無線で話している",
    "romaji": "Calling (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Callup",
    "japanese": "無線での呼び出し、無線交信、無線で呼び出す事",
    "romaji": "Radio callup (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calm",
    "japanese": "微風、無風、風がほとんど無いか、全く無い状態",
    "romaji": "Calm wind (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Calm Wind",
    "japanese": "風が無風の状態、風が吹いて無いとして",
    "romaji": "Calm wind condition (Japanese)",
    "category": "Weather",
    "illustration": "💨"
  },
  {
    "english": "Camber",
    "japanese": "キャンバー、翼の形状、翼型の反り",
    "romaji": "Airfoil camber (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Can Hold",
    "japanese": "持つ事が出来る、含む事が出来る",
    "romaji": "Can hold (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Canard Airplane",
    "japanese": "先尾翼飛行機、水平尾翼が前方にある飛行機",
    "romaji": "Canard aircraft (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Capacity",
    "japanese": "容量、能力、性能",
    "romaji": "Capacity (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carbon",
    "japanese": "カーボン、炭素、すす",
    "romaji": "Carbon (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carbon Deposit",
    "japanese": "カーボン付着、プラグに付くすす",
    "romaji": "Carbon deposits (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carbon Dioxide",
    "japanese": "二酸化炭素",
    "romaji": "CO2",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carbon Monoxide",
    "japanese": "一酸化炭素、無味無臭の猛毒な気体",
    "romaji": "CO (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carbon Monoxide Poisoning",
    "japanese": "一酸化炭素中毒",
    "romaji": "CO poisoning (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carburetor",
    "japanese": "気化器、燃料と空気を混ぜる部分",
    "romaji": "Carburetor (Japanese)",
    "category": "Engine",
    "illustration": "⚙️"
  },
  {
    "english": "Carburetor Heat",
    "japanese": "気化器暖房装置",
    "romaji": "Carb heat (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carburetor Icing",
    "japanese": "気化器の凍結",
    "romaji": "Carburetor icing (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Care",
    "japanese": "ケア、手入れ、修理、面倒を見る",
    "romaji": "Care, maintenance",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Cargo",
    "japanese": "カーゴ、貨物、荷物",
    "romaji": "Cargo (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carried",
    "japanese": "運ばれる、持って行かれる、乗せられた、搭載された",
    "romaji": "Carried (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carrier",
    "japanese": "運ぶもの、搬送波と言われる電波の主体と成るもの",
    "romaji": "Carrier (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Carrier Only No Voice",
    "japanese": "無線信号は有るけど音声が無い",
    "romaji": "CONVO (Japanese)",
    "category": "General",
    "illustration": "❄️"
  },
  {
    "english": "Carry",
    "japanese": "運ぶ、持っていく、乗せる",
    "romaji": "Carry (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "CAS",
    "japanese": "修正対気速度、取り付けによる誤差を修正した対気速度",
    "romaji": "Calibrated Airspeed (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Case",
    "japanese": "ケース、状況、事件、場合",
    "romaji": "Case (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "CAT",
    "japanese": "晴天乱流",
    "romaji": "Clear Air Turbulence (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Category (Aircraft Certification)",
    "japanese": "耐空類別（航空機の）",
    "romaji": "Aircraft category (Japanese)",
    "category": "Aircraft",
    "illustration": "✈️"
  },
  {
    "english": "Category (Pilot Certification)",
    "japanese": "種類（技能証明）",
    "romaji": "Pilot category (Japanese)",
    "category": "General",
    "illustration": "👨‍✈️"
  },
  {
    "english": "Cause",
    "japanese": "源、原因、発生源、理由",
    "romaji": "Cause (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Cause of Weather",
    "japanese": "気象が発生する物、天候が変わる理由",
    "romaji": "Weather causes (Japanese)",
    "category": "Weather",
    "illustration": "🌤️"
  },
  {
    "english": "Caused",
    "japanese": "～させられた、起こされた",
    "romaji": "Caused (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Causing",
    "japanese": "原因と成っている",
    "romaji": "Causing (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Causing IFR conditions",
    "japanese": "天候を計器飛行状態にさせる",
    "romaji": "Causing IFR (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Caution",
    "japanese": "注意",
    "romaji": "Caution (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "CDI",
    "japanese": "コース偏向指示器、VORで誤差を示す針",
    "romaji": "Course Deviation Indicator (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Cease",
    "japanese": "終わる、終了する",
    "romaji": "Cease (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Ceiling",
    "japanese": "シーリング、雲高、航空機の上昇限界",
    "romaji": "Ceiling (Japanese)",
    "category": "Weather",
    "illustration": "🌤"
  },
  {
    "english": "Cell",
    "japanese": "セル、小さい部屋、小さい塊、雷雨などの強い部分",
    "romaji": "Cell (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Center",
    "japanese": "中心の、真ん中の",
    "romaji": "Center (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Center of Gravity",
    "japanese": "重心位置",
    "romaji": "CG (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Center of Lift",
    "japanese": "揚力中心",
    "romaji": "Center of lift (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Center of Pressure",
    "japanese": "圧力中心",
    "romaji": "Center of pressure (Japanese)",
    "category": "General",
    "illustration": "📊"
  },
  {
    "english": "Centerline",
    "japanese": "中心線",
    "romaji": "Centerline (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Central",
    "japanese": "中心の、中央、中部、中部地区",
    "romaji": "Central (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Centrifugal",
    "japanese": "遠心、外に向う、遠心力",
    "romaji": "Centrifugal (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Centrifugal Force",
    "japanese": "遠心力、旋回の反対側に航空機を押し出そうとする力",
    "romaji": "Centrifugal force (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Centripetal",
    "japanese": "内部に向く、求心性の、中心に向かう",
    "romaji": "Centripetal (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Certain",
    "japanese": "確実、間違いなく",
    "romaji": "Certain (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Certificate",
    "japanese": "証明書、免許",
    "romaji": "Certificate (Japanese)",
    "category": "General",
    "illustration": "📜"
  },
  {
    "english": "Certificated",
    "japanese": "資格を持った、免許の有る",
    "romaji": "Certificated (Japanese)",
    "category": "General",
    "illustration": "📜"
  },
  {
    "english": "Certificated Mechanic",
    "japanese": "証明書（免許）を持っている整備士",
    "romaji": "A&P mechanic",
    "category": "General",
    "illustration": "📜"
  },
  {
    "english": "Certificates",
    "japanese": "免許書、証明書",
    "romaji": "Certificates (Japanese)",
    "category": "General",
    "illustration": "📜"
  },
  {
    "english": "Certification",
    "japanese": "認可、許可する事、免許の発行",
    "romaji": "Certification (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Certified",
    "japanese": "認可された、資格の有る、免許の有る",
    "romaji": "Certified (Japanese)",
    "category": "General",
    "illustration": "✈️"
  },
  {
    "english": "Certified Flight Instructor",
    "japanese": "操縦教育証明、飛行教官",
    "romaji": "CFI (Japanese)",
    "category": "Flight Operations",
    "illustration": "💡"
  }
];

let currentIndex = 0;
let filteredTerms = [];
let studiedCards = new Set();
let masteredCards = new Set();
let practicingCards = new Set();
let sessionStats = {
    studied: 0,
    mastered: 0,
    practicing: 0
};
let isFlipped = false;
let isSwipeInProgress = false;
let studySettings = {
    categories: ['all'],
    mastery: 'all',
    shuffle: true,
    audio: true
};

let currentBookmark = null;
let bookmarkedCards = new Set();

async function init() {
    loadProgress();
    await loadAdditionalTerms();
    setupHomePage();
    setupSwipeHandlers();
    loadVoices();
    checkForBookmark();
    setupFileUpload();
}

async function loadAdditionalTerms() {
    try {
        const response = await fetch('./attached_assets/Cleaned Terms_1752019126199.json');
        if (response.ok) {
            const additionalTerms = await response.json();
            console.log(`Loading ${additionalTerms.length} additional terms...`);
            
            // Process the additional terms to ensure they have the right structure
            const processedTerms = additionalTerms.map(term => ({
                english: term.english,
                japanese: term.japanese,
                romaji: term.romaji,
                category: term.category,
                illustration: term.illustration || term.emoji || '✈️'
            }));
            
            // Add to the main terms array
            aviationTerms.push(...processedTerms);
            console.log(`Total terms now: ${aviationTerms.length}`);
        } else {
            console.log('Additional terms file not found, using default terms only');
        }
    } catch (error) {
        console.log('Error loading additional terms:', error);
        console.log('Using default terms only');
    }
}

function checkForBookmark() {
    const bookmark = loadBookmark();
    if (bookmark) {
        currentBookmark = bookmark;
        showBookmarkNotification();
    }
}

function showBookmarkNotification() {
    if (!currentBookmark) return;
    
    const date = new Date(currentBookmark.timestamp);
    const timeStr = date.toLocaleString();
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(33, 150, 243, 0.9);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 1000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        text-align: center;
        max-width: 400px;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 10px;">📖 Bookmark Found!</div>
        <div style="font-size: 0.9rem; margin-bottom: 15px;">
            Saved: ${timeStr}<br>
            Card ${currentBookmark.currentIndex + 1} of ${currentBookmark.filteredTerms.length}
        </div>
        <button onclick="resumeFromBookmark(); this.parentNode.remove();" 
                style="background: #4CAF50; color: white; border: none; padding: 8px 16px; border-radius: 5px; margin-right: 10px; cursor: pointer;">
            Resume
        </button>
        <button onclick="this.parentNode.remove();" 
                style="background: #f44336; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer;">
            Dismiss
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 10 seconds if not interacted with
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 10000);
}

function loadProgress() {
    const saved = localStorage.getItem('aviationFlashcardProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        masteredCards = new Set(progress.mastered || []);
        practicingCards = new Set(progress.practicing || []);
        studiedCards = new Set(progress.studied || []);
        bookmarkedCards = new Set(progress.bookmarked || []);
    }
}

function saveProgress() {
    const progress = {
        mastered: Array.from(masteredCards),
        practicing: Array.from(practicingCards),
        studied: Array.from(studiedCards),
        bookmarked: Array.from(bookmarkedCards)
    };
    localStorage.setItem('aviationFlashcardProgress', JSON.stringify(progress));
}

function saveBookmark() {
    if (filteredTerms.length === 0) return;
    
    const bookmark = {
        currentIndex: currentIndex,
        filteredTerms: filteredTerms,
        studySettings: { ...studySettings },
        sessionStats: { ...sessionStats },
        timestamp: new Date().toISOString(),
        isFlipped: isFlipped
    };
    
    localStorage.setItem('aviationFlashcardBookmark', JSON.stringify(bookmark));
    currentBookmark = bookmark;
    
    // Show confirmation
    showBookmarkConfirmation('Bookmark saved!');
}

function loadBookmark() {
    const saved = localStorage.getItem('aviationFlashcardBookmark');
    if (!saved) return null;
    
    try {
        return JSON.parse(saved);
    } catch (e) {
        console.error('Error loading bookmark:', e);
        return null;
    }
}

function resumeFromBookmark() {
    const bookmark = loadBookmark();
    if (!bookmark) {
        alert('No bookmark found to resume from.');
        return;
    }
    
    // Restore the session state
    filteredTerms = bookmark.filteredTerms;
    currentIndex = bookmark.currentIndex;
    studySettings = { ...bookmark.studySettings };
    sessionStats = { ...bookmark.sessionStats };
    isFlipped = bookmark.isFlipped;
    currentBookmark = bookmark;
    
    // Switch to study page and display current card
    showPage('studyPage');
    displayCard();
    updateStats();
    
    // Restore flip state
    const flashcard = document.getElementById('flashcard');
    if (isFlipped) {
        flashcard.classList.add('flipped');
    }
    
    showBookmarkConfirmation('Resumed from bookmark!');
}

function clearBookmark() {
    localStorage.removeItem('aviationFlashcardBookmark');
    currentBookmark = null;
    showBookmarkConfirmation('Bookmark cleared!');
}

function showBookmarkConfirmation(message) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 1000;
        font-weight: bold;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

function setupFileUpload() {
    const fileInput = document.getElementById('jsonFileInput');
    const uploadStatus = document.getElementById('uploadStatus');
    
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
            showUploadStatus('Error: Please select a JSON file', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const jsonData = JSON.parse(e.target.result);
                processUploadedTerms(jsonData);
            } catch (error) {
                showUploadStatus('Error: Invalid JSON file format', 'error');
                console.error('JSON parse error:', error);
            }
        };
        
        reader.onerror = function() {
            showUploadStatus('Error: Failed to read file', 'error');
        };
        
        reader.readAsText(file);
        
        // Clear the input so the same file can be uploaded again
        fileInput.value = '';
    });
}

function processUploadedTerms(data) {
    let newTerms = [];
    
    // Handle different JSON structures
    if (Array.isArray(data)) {
        newTerms = data;
    } else if (data.terms && Array.isArray(data.terms)) {
        newTerms = data.terms;
    } else if (data.aviationTerms && Array.isArray(data.aviationTerms)) {
        newTerms = data.aviationTerms;
    } else {
        showUploadStatus('Error: JSON must contain an array of terms or have a "terms" property', 'error');
        return;
    }
    
    // Validate term structure
    const validTerms = [];
    const requiredFields = ['english', 'japanese', 'romaji', 'category'];
    
    newTerms.forEach((term, index) => {
        const missingFields = requiredFields.filter(field => !term[field]);
        
        if (missingFields.length === 0) {
            // Add default illustration if not provided
            if (!term.illustration && !term.emoji) {
                term.illustration = '✈️';
            }
            // Standardize to use illustration field
            if (term.emoji && !term.illustration) {
                term.illustration = term.emoji;
            }
            validTerms.push(term);
        } else {
            console.warn(`Term ${index + 1} missing required fields: ${missingFields.join(', ')}`);
        }
    });
    
    if (validTerms.length === 0) {
        showUploadStatus('Error: No valid terms found in JSON file', 'error');
        return;
    }
    
    // Add new terms to the existing array
    const originalLength = aviationTerms.length;
    aviationTerms.push(...validTerms);
    
    // Refresh the home page to show new categories
    setupHomePage();
    
    showUploadStatus(`Success: Added ${validTerms.length} new terms (${newTerms.length - validTerms.length} skipped due to missing fields)`, 'success');
}

function showUploadStatus(message, type) {
    const uploadStatus = document.getElementById('uploadStatus');
    uploadStatus.textContent = message;
    uploadStatus.className = `upload-status ${type}`;
    
    // Clear status after 5 seconds
    setTimeout(() => {
        uploadStatus.textContent = '';
        uploadStatus.className = 'upload-status';
    }, 5000);
}

function setupHomePage() {
    const categories = {};
    aviationTerms.forEach(term => {
        if (!categories[term.category]) {
            categories[term.category] = 0;
        }
        categories[term.category]++;
    });

    // Show/hide resume button based on bookmark availability
    const resumeButton = document.getElementById('resumeButton');
    const bookmark = loadBookmark();
    if (resumeButton) {
        if (bookmark) {
            resumeButton.style.display = 'block';
            const date = new Date(bookmark.timestamp);
            resumeButton.title = `Resume from ${date.toLocaleString()} - Card ${bookmark.currentIndex + 1}/${bookmark.filteredTerms.length}`;
        } else {
            resumeButton.style.display = 'none';
        }
    }

    const categoryContainer = document.getElementById('categoryOptions');
    categoryContainer.innerHTML = '';

    const allOption = document.createElement('div');
    allOption.className = 'option-card selected';
    allOption.setAttribute('data-category', 'all');
    allOption.innerHTML = `
        <div class="icon">📚</div>
        <div class="title">All Categories</div>
        <div class="count">${aviationTerms.length} terms</div>
    `;
    categoryContainer.appendChild(allOption);

    Object.entries(categories).sort().forEach(([category, count]) => {
        const option = document.createElement('div');
        option.className = 'option-card';
        option.setAttribute('data-category', category);

        const icons = {
            'ATC': '🗼',
            'Weather': '🌤',
            'Engine': '⚙️',
            'Navigation': '🧭',
            'Aircraft': '✈️',
            'Flight Operations': '🛫',
            'Instruments': '🎛️',
            'Safety': '🚨',
            'Medical': '⚕️',
            'Communication': '📻',
            'General': '📖',
            'Runway': '🛣️',
            'Airport': '🏢',
            'Pilot': '👨‍✈️',
            'Maintenance': '🔧',
            'Fuel': '⛽',
            'Emergency': '🆘'
        };

        option.innerHTML = `
            <div class="icon">${icons[category] || '📖'}</div>
            <div class="title">${category}</div>
            <div class="count">${count} terms</div>
        `;
        categoryContainer.appendChild(option);
    });

    setupOptionHandlers();
    setupSearchHandlers();
}

function setupOptionHandlers() {
    document.querySelectorAll('[data-category]').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Handle "All Categories" selection
            if (category === 'all') {
                // If "All Categories" is clicked, deselect all others and select only "All"
                document.querySelectorAll('[data-category]').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                studySettings.categories = ['all'];
            } else {
                // If a specific category is clicked, deselect "All Categories" first
                document.querySelector('[data-category="all"]').classList.remove('selected');
                
                // Toggle the clicked category
                this.classList.toggle('selected');
                
                // Update the categories array
                const selectedCategories = Array.from(document.querySelectorAll('[data-category].selected'))
                    .map(card => card.getAttribute('data-category'))
                    .filter(cat => cat !== 'all');
                
                // If no categories are selected, default to "All Categories"
                if (selectedCategories.length === 0) {
                    document.querySelector('[data-category="all"]').classList.add('selected');
                    studySettings.categories = ['all'];
                } else {
                    studySettings.categories = selectedCategories;
                }
            }
        });
    });

    document.querySelectorAll('[data-mastery]').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('[data-mastery]').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            studySettings.mastery = this.getAttribute('data-mastery');
        });
    });

    document.querySelectorAll('[data-option]').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('selected');
            const option = this.getAttribute('data-option');
            studySettings[option] = this.classList.contains('selected');
        });
    });

    }

function setupSearchHandlers() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.classList.remove('show');
            return;
        }
        
        const matches = aviationTerms.filter(term => 
            term.english.toLowerCase().includes(query) ||
            term.japanese.toLowerCase().includes(query) ||
            term.romaji.toLowerCase().includes(query) ||
            term.category.toLowerCase().includes(query)
        ).slice(0, 10); // Limit to 10 results
        
        if (matches.length > 0) {
            searchResults.innerHTML = matches.map(term => `
                <div class="search-result-item" data-term="${term.english}">
                    <div class="search-result-english">${term.english}</div>
                    <div class="search-result-japanese">${term.japanese}</div>
                    <div class="search-result-romaji">${term.romaji}</div>
                    <div class="search-result-category">${term.category}</div>
                </div>
            `).join('');
            searchResults.classList.add('show');
            
            // Add click handlers to search results
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const termName = this.getAttribute('data-term');
                    const term = aviationTerms.find(t => t.english === termName);
                    if (term) {
                        // Set up a single-term study session
                        filteredTerms = [term];
                        currentIndex = 0;
                        isFlipped = false;
                        showPage('studyPage');
                        displayCard();
                        updateStats();
                        searchInput.value = '';
                        searchResults.classList.remove('show');
                    }
                });
            });
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            searchResults.classList.add('show');
        }
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container')) {
            searchResults.classList.remove('show');
        }
    });
    
    // Clear search when escape is pressed
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            this.value = '';
            searchResults.classList.remove('show');
        }
    });
}

function startStudySession() {
    filteredTerms = aviationTerms.filter((term, index) => {
        const categoryMatch = studySettings.categories.includes('all') || studySettings.categories.includes(term.category);

        let masteryMatch = true;
        if (studySettings.mastery === 'mastered') {
            masteryMatch = masteredCards.has(index);
        } else if (studySettings.mastery === 'practicing') {
            masteryMatch = practicingCards.has(index) || bookmarkedCards.has(index);
        } else if (studySettings.mastery === 'unmastered') {
            masteryMatch = !masteredCards.has(index) && !practicingCards.has(index);
        }

        return categoryMatch && masteryMatch;
    });

    if (filteredTerms.length === 0) {
        alert('No terms match your selection. Please choose different options.');
        return;
    }

    if (studySettings.shuffle) {
        for (let i = filteredTerms.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredTerms[i], filteredTerms[j]] = [filteredTerms[j], filteredTerms[i]];
        }
    }

    sessionStats = { studied: 0, mastered: 0, practicing: 0 };
    currentIndex = 0;
    isFlipped = false;
    showPage('studyPage');
    displayCard();
    updateStats();
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function returnHome() {
    showPage('homePage');
}

function studyUnmastered() {
    studySettings.mastery = 'unmastered';
    studySettings.categories = ['all'];
    document.querySelectorAll('[data-mastery]').forEach(c => c.classList.remove('selected'));
    document.querySelector('[data-mastery="unmastered"]').classList.add('selected');
    startStudySession();
}

function setupSwipeHandlers() {
    const flashcard = document.getElementById('flashcard');
    
    // Only add click handler for card flipping - no swiping
    flashcard.addEventListener('click', handleCardClick);
    
    // Setup bookmark button drag functionality for touch devices
    setupBookmarkDrag();
}

function setupBookmarkDrag() {
    // Touch drag functionality disabled
}

// Touch drag functionality removed

// Bookmark position save/load functions removed



function displayCard() {
    if (filteredTerms.length === 0) {
        showCompletionPage();
        return;
    }

    const term = filteredTerms[currentIndex];
    document.getElementById('japaneseTerm').textContent = term.japanese;
    document.getElementById('romajiTerm').textContent = term.romaji;
    const illustration = term.illustration || term.emoji || '✈️';
    document.getElementById('frontIllustration').textContent = illustration;
    document.getElementById('englishTerm').textContent = term.english;
    document.getElementById('backIllustration').textContent = illustration;
    
    // Display selected categories
    const categoryDisplay = document.getElementById('currentCategory');
    if (studySettings.categories.includes('all')) {
        categoryDisplay.textContent = 'All Categories';
    } else if (studySettings.categories.length === 1) {
        categoryDisplay.textContent = studySettings.categories[0];
    } else {
        categoryDisplay.textContent = studySettings.categories.join(', ');
    }

    const flashcard = document.getElementById('flashcard');
    // Immediately remove all animation classes to ensure clean state
    flashcard.classList.remove('flipped', 'swipe-left', 'swipe-right', 'new-card', 'swiping-left', 'swiping-right');
    isFlipped = false;

    // Force a reflow to ensure the classes are fully removed
    flashcard.offsetHeight;

    // Update bookmark button state
    updateBookmarkButton();

    updateProgress();
}

function flipCard(event) {
    if (event) event.stopPropagation();

    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;

    const termIndex = aviationTerms.indexOf(filteredTerms[currentIndex]);
    if (!studiedCards.has(termIndex)) {
        studiedCards.add(termIndex);
        sessionStats.studied++;
        updateStats();
        saveProgress();
    }
}

function handleCardClick(event) {
    // Don't flip if clicking on audio buttons, flip button, bookmark button, any control elements, or editable text
    if (event.target.classList.contains('audio-btn') || 
        event.target.classList.contains('flip-button') ||
        event.target.classList.contains('bookmark-btn') ||
        event.target.classList.contains('arrow-button') ||
        event.target.closest('.audio-btn') ||
        event.target.closest('.flip-button') ||
        event.target.closest('.bookmark-btn') ||
        event.target.closest('.arrow-button') ||
        event.target.closest('.mastery-controls') ||
        event.target.contentEditable === 'true') {
        return;
    }
    
    // Allow flipping by clicking anywhere on the card
    event.preventDefault();
    event.stopPropagation();
    flipCard(event);
}

function toggleBookmark(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const termIndex = aviationTerms.indexOf(filteredTerms[currentIndex]);
    
    if (bookmarkedCards.has(termIndex)) {
        bookmarkedCards.delete(termIndex);
        showBookmarkConfirmation('Bookmark removed');
    } else {
        bookmarkedCards.add(termIndex);
        showBookmarkConfirmation('Card bookmarked for review');
    }
    
    updateBookmarkButton();
    saveProgress();
}

function updateBookmarkButton() {
    const termIndex = aviationTerms.indexOf(filteredTerms[currentIndex]);
    const isBookmarked = bookmarkedCards.has(termIndex);
    
    const bookmarkBtnBack = document.getElementById('bookmarkBtnBack');
    const bookmarkIconBack = document.getElementById('bookmarkIconBack');
    
    if (isBookmarked) {
        bookmarkBtnBack.classList.add('bookmarked');
        bookmarkIconBack.textContent = '✅';
        bookmarkBtnBack.title = 'Remove bookmark';
    } else {
        bookmarkBtnBack.classList.remove('bookmarked');
        bookmarkIconBack.textContent = '✅';
        bookmarkBtnBack.title = 'Mark for review';
    }
}

function markAsMastered() {
    const termIndex = aviationTerms.indexOf(filteredTerms[currentIndex]);
    if (!masteredCards.has(termIndex)) {
        sessionStats.mastered++;
    }
    masteredCards.add(termIndex);
    practicingCards.delete(termIndex);
    studiedCards.add(termIndex);
    saveProgress();
    
    // Animate card swiping right
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.add('swipe-right');
    
    advanceCard();
}

function markAsPracticing() {
    const termIndex = aviationTerms.indexOf(filteredTerms[currentIndex]);
    if (!practicingCards.has(termIndex)) {
        sessionStats.practicing++;
    }
    practicingCards.add(termIndex);
    masteredCards.delete(termIndex);
    studiedCards.add(termIndex);
    saveProgress();
    
    // Animate card swiping left
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.add('swipe-left');
    
    advanceCard();
}

function advanceCard() {
    setTimeout(() => {
        if (currentIndex < filteredTerms.length - 1) {
            currentIndex++;
            displayCard();
            updateStats();
            // Auto-save bookmark on each card advance
            saveBookmark();
        } else {
            // Clear bookmark when session completes
            clearBookmark();
            showCompletionPage();
        }
    }, 600); // Increased timeout to match animation duration
}

function nextCard() {
    // Navigation disabled - cards can only advance through swiping
    return;
}

function previousCard() {
    // Navigation disabled - cards can only advance through swiping
    return;
}

function updateStats() {
    document.getElementById('currentCard').textContent = currentIndex + 1;
    document.getElementById('totalCards').textContent = filteredTerms.length;
    document.getElementById('studiedCards').textContent = sessionStats.studied;
}

function updateProgress() {
    const progress = filteredTerms.length > 0 ? ((currentIndex + 1) / filteredTerms.length) * 100 : 0;
    document.getElementById('progressFill').style.width = progress + '%';
}

function showCompletionPage() {
    document.getElementById('sessionStudied').textContent = sessionStats.studied;
    document.getElementById('sessionMastered').textContent = sessionStats.mastered;
    document.getElementById('sessionPracticing').textContent = sessionStats.practicing;
    document.getElementById('totalMastered').textContent = masteredCards.size;

    let message = 'Great job! ';
    if (sessionStats.mastered > 0) {
        message += `You mastered ${sessionStats.mastered} new terms! `;
    }
    if (sessionStats.practicing > 0) {
        message += `${sessionStats.practicing} terms marked for more practice. `;
    }
    message += 'Keep up the excellent work!';

    document.getElementById('completionMessage').textContent = message;
    showPage('completionPage');
}

function playJapaneseAudio(event) {
    event.stopPropagation();
    if (!studySettings.audio) return;
    const currentText = document.getElementById('japaneseTerm').textContent;
    playAudioWithFallback(currentText, ['ja-JP', 'ja']);
}

// Romaji audio function removed

function playEnglishAudio(event) {
    event.stopPropagation();
    if (!studySettings.audio) return;
    const currentText = document.getElementById('englishTerm').textContent;
    playAudioWithFallback(currentText, ['en-US', 'en-GB', 'en']);
}

function playAudioWithFallback(text, languages) {
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported');
        return;
    }

    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();

    let selectedVoice = null;
    
    // For Japanese text, prefer Kyoko (female) or other native Japanese voices
    if (languages[0] === 'ja-JP') {
        selectedVoice = voices.find(voice => voice.name.includes('Kyoko') && voice.lang === 'ja-JP') ||
                      voices.find(voice => voice.name.includes('Shelley') && voice.lang === 'ja-JP') ||
                      voices.find(voice => voice.lang === 'ja-JP');
    } else {
        // For English text, prefer Samantha voice, fallback to Daniel
        selectedVoice = voices.find(voice => voice.name.includes('Samantha') && voice.lang === 'en-US') ||
                      voices.find(voice => voice.name.includes('Daniel') && voice.lang === 'en-GB');
        
        if (!selectedVoice) {
            // Fallback to other English voices if preferred voices are not available
            for (const lang of languages) {
                selectedVoice = voices.find(voice => 
                    voice.lang.startsWith(lang) &&
                    (lang.startsWith('ja') ? voice.lang.includes('JP') : true)
                );
                if (selectedVoice) break;
            }
        }
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
        console.log(`Using voice: ${selectedVoice.name} (${selectedVoice.lang}) for: "${text}"`);
    } else {
        utterance.lang = languages[0];
        console.log(`No specific voice found, using default for: "${text}"`);
    }

    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onerror = function(event) {
        console.error('Speech synthesis error:', event.error);
    };

    speechSynthesis.speak(utterance);
}

function loadVoices() {
    const voices = speechSynthesis.getVoices();
    console.log('Available Japanese voices:', voices.filter(v => v.lang.startsWith('ja')).map(v => `${v.name} (${v.lang})`));
    console.log('Available English voices:', voices.filter(v => v.lang.startsWith('en')).map(v => `${v.name} (${v.lang})`));
}

function testMaleVoices() {
    const voices = speechSynthesis.getVoices();
    const maleUSVoices = [
        'Ralph (en-US)',
        'Junior (en-US)', 
        'Reed (en-US)',
        'Rocko (en-US)',
        'Eddy (en-US)',
        'Grandpa (en-US)',
        'Fred (en-US)',
        'Albert (en-US)'
    ];
    
    console.log('Testing US Male Voices...');
    
    maleUSVoices.forEach((voiceName, index) => {
        setTimeout(() => {
            const voice = voices.find(v => `${v.name} (${v.lang})` === voiceName);
            if (voice) {
                const utterance = new SpeechSynthesisUtterance(`Hello, this is ${voice.name}. Aviation terms study.`);
                utterance.voice = voice;
                utterance.rate = 0.8;
                utterance.pitch = 1.0;
                utterance.volume = 1.0;
                console.log(`Playing: ${voiceName}`);
                speechSynthesis.speak(utterance);
            }
        }, index * 3000); // 3 second delay between each voice
    });
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}

document.addEventListener('keydown', function(event) {
    // Check if the event target is an editable element
    const isEditable = event.target.isContentEditable || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';
    
    if (document.getElementById('studyPage').classList.contains('active')) {
        switch(event.key) {
            case 'ArrowLeft':
                // Navigation disabled - cards can only advance through buttons
                break;
            case 'ArrowRight':
                // Navigation disabled - cards can only advance through buttons
                break;
            case ' ':
            case 'Enter':
                // Prevent space bar and enter from flipping card when editing text
                if (isEditable) {
                    return; // Allow normal text input behavior
                }
                // Keyboard shortcuts disabled - no animation
                break;
            case 'j':
            case 'J':
                // Keyboard shortcuts disabled - no animation
                break;
            case 'e':
            case 'E':
                // Keyboard shortcuts disabled - no animation
                break;
            case 'm':
            case 'M':
                // Keyboard shortcuts disabled - no animation
                break;
            case 'p':
            case 'P':
                // Keyboard shortcuts disabled - no animation
                break;
            case 'Escape':
                // Keyboard shortcuts disabled - no animation
                break;
            case 's':
            case 'S':
                // Keyboard shortcuts disabled - no animation
                break;
            case 'r':
            case 'R':
                // Keyboard shortcuts disabled - no animation
                break;
        }
    }
});

// Cordova initialization
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    init();
    
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', loadVoices);
    }
}

// Fallback for web browsers (non-Cordova environment)
if (!window.cordova) {
    window.addEventListener('load', init);
    window.addEventListener('load', function() {
        if (speechSynthesis.getVoices().length === 0) {
            speechSynthesis.addEventListener('voiceschanged', loadVoices);
        }
    });
}