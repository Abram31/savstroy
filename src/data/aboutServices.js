import { routes } from "../routes/routes"

export const servicesData = {
    plumbing: {
        title: "Сантехнические работы",
        text: `
    Сантехнические работы — один из основных сервисов, оказываемый компанией САВ-Строймонтаж для наших клиентов. 

    Мы производим  все виды сантехнических услуг в Минске. Оказываем сантехнические услуги гарантированно высокого качества, что обусловлено высокой квалификацией наших специалистов-сантехников, а также большим опытом их работы. Наша компания очень дорожит своей репутацией, и поэтому наши бригады сантехников — это проверенные временем и многочисленными выполненными заказами настоящие профессионалы своего дела! Мы не сотрудничаем с «мастерами на все руки» или неопытными «новичками». 

    Наши сантехники занимаются только своей работой и уже много-много лет. А еще особенностью оказываемых нами услуг сантехника является доброжелательность наших специалистов и прекрасный сервис. Мы поможем Вам в любой ситуации и решим даже самую сложную сантехническую задачу!

    Выполняемые виды работ:
     - монтаж (замена) системы отопления;
     - монтаж (замена) системы водоснабжения;
     - монтаж (замена) систем водоотведения бытовых и сточных вод;
     - монтаж (замена) узлов регулирования систем отопления, горячего водоснабжения и приточных установок;
     - монтаж (демонтаж) сантехнической посуды (ванны, умывальники, унитазы, инсталляций и т.д.);
     - монтаж (замена) оборудования (смесители, полтенцесушители, водоподогреватели и т.д.).
       `,
        link: routes.services.path + '/#plumbing', 
        imgPath: 'plumbing-min.png'
    },
    electric: {
        title: "Электромонтажные работы",
        text: `
        Электромонтажные работы понимается комплекс строительных работ, осуществляемых при новом строительстве, либо модернизации и реконструкции, капитальном ремонте зданий и сооружений различного предназначения, и предполагающих монтаж электрических сетей электрооборудования. Инженеры и электромонтажники в своей деятельности ссылаются и применяют в процессе работы законодательные стандарты Правил Установки Электроснабжения (ПУЭ), строительные нормы и правила(СНиП), инструктажи производителей электротехнических устройств, также работники нашего предприятия регулярно проходят проверки знаний техники безопасности в электроустановках.
        Под электромонтажными работами подразумевается весь перечень работ, необходимых для комплексной электрификации объекта. Иначе говоря, он включает комплекс мер по первичному устройству или реконструкции систем обеспечения и управления электроэнергией. Цель электромонтажа - подключение потребителей к источникам электроэнергии, начиная от установки розеток и заканчивая обеспечением системой бесперебойного электроснабжения всего объекта. Качество и сроки электромонтажных работ напрямую зависят от навыков команды специалистов.

        Мы гарантируем ответственный, профессиональный подход и соблюдение всех строительных норм и правил при оказании следующих услуг:
        - монтаж, реконструкция ТП, КТП;
        - монтаж кабельных линий;
        - монтаж ВУ, РУ, ВРУ, сборка и монтаж электрощитового оборудования;
        - монтаж сетей внутреннего и наружного электроснабжения;
        - монтаж осветительной сети;
        - монтаж локальных электроустановок;
        - монтаж слаботочных сетей;
        - ремонтные работы;
        - пуско-наладочные работы;
        - электрофизические измерения;
        - допуск электроустановок в эксплуатацию.
`,
        link: routes.services.path + '/#electric', 
        imgPath: 'electrician-min.png'
    },
    building: {
        title: "Строительство частных домов",
        text: ``,
        link: routes.services.path + '/#building',
        imgPath: 'building-min.png'
    },
    roof: {
        title: "Кровельные работы",
        text: `
        Кровельные работы включают в себя монтажные и ремонтные работы, устройство кровли, и обслуживание водосточных систем. Любой вид работы с кровлей должен выполняться специально обученными специалистами с применением специального оборудования. 
Кровельные работы включают в себя и монтаж кровли, а именно создание кровельного «пирога», т.е. кладка всех слоев кровельной конструкции:
- пароизоляционная пленка;
- утеплитель;
- основное покрытие (кровельный материал);
- вентиляционные устройства;
- монтаж дополнительных элементов кровли;
- устройство фронтонов, свесов, карнизов;
- устройство водосточной системы.

Мы качественно и оперативно производим монтаж «кровельного пирога» и фальцевой кровли.
Если Вы сомневаетесь или не знаете какой тип кровли предпочесть, то наши специалисты помогут советом в подборе оптимального варианта соотношения цены и качества, а также проведут выездную консультацию для оценки объема работ.
`,
        link: routes.services.path + '/#roof',
        imgPath: 'roof-min.png'
    },
    decoration: {
        title: "Внутренняя отделка",
        text: `Внутренняя отделка – это финальная стадия строительства дома под ключ. Ее качество определяет, как долго интерьер сохранит свой первозданный вид.  В этот список входит: 
1.	монтаж внутренних стен;
2.	разведение электрики;
3.	установку трасс системы кондиционирования
4.	отделка стен;
5.	выравнивание полов, стен, потолков;
6.	монтаж систем отопления, водоснабжения, 
7.	монтаж конструкций из гипсокартон;
8.	укладку напольных покрытий;
9.	монтаж розеток и приборов освещения;
10.	поклейка обоев и т.д. 
Этот список может быть подробным и длинным. Если говорить коротко, то отделка квартиры включает практически весь перечень работ, чтобы по их завершению Ваше жилье было готова к проживанию.
`,
        link: routes.services.path + '/#decoration',
        imgPath: 'decoration-min.png'
    },
    insulation: {
        title: "Фасадные работы",
        text: `
        Фасадные работы – это комплекс работ, направленных на улучшение внешнего вида здания и защиты от внешних неблагоприятных факторов. В него входят: 
- проведение диагностики фасада здания с точки зрения технических характеристик;
- шпатлевку, отделку, покраску и декорирование фасада; восстановление отдельных сегментов декора; 
- монтаж таких элементов, как: отлив, водосток, вентиляция, молниеотвод и так далее; 
- установку теплоизоляции; 
- обработку поверхности водоотталкивающими средствами; 
- устранение солевых отложений на фасаде; 
- пескоструйную обработку (для удаления грязи);
- герметизацию панельных швов; 
- мытье труднодоступных опалубок и окон.
`,
        link: routes.services.path + '/#insulation',
        imgPath: 'warming-min.jpg'
    },

}

