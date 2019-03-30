import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang_select: 'RO',
    text_ro: {
      vilarosa: {
        header: 'Despre noi ...',
        text: ['Vila Rosa a fost deschisă în ianuarie 2001 cu servicii de cazare categoria 2 stele. Ulterior, a fost deschis corpul de 3 stele și restaurantul. Din 2017 restaurantul e închis și servim doar Mic Dejun tip bufet suedez.',
        'Activitatea de cazare se desfășoară în două clădiri situate în aceeași incintă. Recepția și Salonul de Mic Dejun se află în corpul principal, cel de 2 stele.',
        'Ne găsiți în Cluj-Napoca, Cartierul Mănăștur (vestul orașului, ieșirea spre Oradea), într-o zonă de case și ateliere mici, în apropiere de Cimitirul Mănăștur. În zilele lucrătoare există puțină agitație, dar pe timp de noapte este foarte liniște.',
        'Clientela principală o constituie firmele, cu afaceri în Cluj sau doar în tranzit. Promovăm relații de lungă durată cu clienții noștri și acordăm atenție sporită la calitatea serviciilor oferite. De asemenea, aducem în permanență îmbunătățiri pentru a oferi clienților cele mai bune servicii.']
      },
      reception: {
        header: 'Serviciile noastre ...',
        text: ['Vila Rosa vă pune la dispoziție servicii de cazare de 2 și 3 stele, împărțite în 2 pavilioane, și Mic Dejun în pavilionul de 2 stele. Serviciile de cazare sunt disponibile pe tot parcursul anului.',
        'Pavilioanele nu au instalat ascensor. Clădirea de 2* are camerele distribuite pe 3 etaje și mansardă. Camerele sunt numerotate de la 10 la 43, cu cifra zecilor reprezentând etajul. Clădirea de 3* are camerele distribuite pe parter, 2 etaje și mansardă. Camerele sunt numerotate de la 101 la 404, cu cifra sutelor reprezentând nivelul.',
        'Unitatea vă pune la dispoziție parcare auto în incinta proprie cu supraveghere video.',
        'Recepția funcționează în regim zilnic între orele 07:00-23:00. Nu se efectueaza rezervări și cazări în afara programului. Pentru rezervări și informații vă rugăm să ne contactați.',
        'La finalizarea procesului de rezervare, Recepția transmite confirmarea rezervării prin mesaj pe mobil, e-mail sau fax. Numai rezervările care au primit confirmare sunt considerate valabile. Confirmarea cuprinde numele persoanei care a făcut rezervarea, perioada șederii, numărul și tipul camerelor rezervate, numărul de oaspeți asteptați, tarifele acordate și numele recepționerului de serviciu. În ziua cazării, e posibil ca Recepția să contactateze telefonic persoana responsabilă de rezervare pentru a confirma sosirea.',
        'Ziua hotelieră începe la ora 14:00 în ziua cazării și se încheie la ora 12:00, în ziua următoare. Cazările se efectuează doar în intervalul 14:00-24:00. Pentru excepții vă rugăm să anunțați Recepția din timp, deoarece pot apărea suprapuneri cu alte rezervări și se pot percepe tarife suplimentare.',
        'Micul dejun este tip bufet suedez. Se servește zilnic pe tot parcursul anului, de luni până vineri în intervalul 07:00-10:30 și sâmbătă-duminică (cu excepția sărbătorilor legale: 25-26.12.2016, 01-02.01.2017, ...) în intervalul 08:00-10:30. Micul dejun se servește doar în salonul de Mic Dejun.',
        'În funcție de numărul de persoane sau de camere, de perioada șederii sau de frecvență, se pot acorda reduceri la tarifele de recepție. Nu se acordă reducere la tariful de mic dejun. Reducerile de preț nu se cumulează, la un moment dat este valabilă o singură reducere. Pentru oferte vă rugăm să contactați Recepția.',
        'Persoanele fizice sunt solicitate să facă plata serviciilor la cazare, în lei sau cu carte de credit (VISA, MAESTRO, MASTERCARD). Persoanele juridice pot opta pentru semnarea unui contract de colaborare, care le oferă mai multă flexibilitate la plata serviciilor.',
        'Vila nu este amenajată pentru acomodarea animalelor de companie, ca urmare, nu se permite accesul cu acestea în interior.',
        'Este interzis fumatul în spațiile închise (Legea nr.15/2016). Persoanele descoperite că au fumat în spațiile interioare vor fi evacuate fără a li se returna contravaloarea serviciilor.']
      },
      rooms: [
        {
          header: 'Cazare 2*',
          text: 'Avem disponibile camere de nefumători cu 1 pat dublu (DBB), 2 (DBL) și 3 (TRI) paturi single. Pentru o singură persoană, camerele double se oferă în regim single (SGL). Camerele de 2* sunt de dimensiuni generoase, echipate standard, mobilier minimal, cu baie proprie, televizor LCD/LED și internet wireless gratuit. Nu se oferă paturi suplimentare.',
          prices: {
                  regular: {
                          title: 'Tarife',
                          subtitle: 'fără Mic Dejun',
                          description: 'Tarife standard, de recepție, valabile pe toată durata anului, cu excepția evenimentelor speciale',
                          time_span: '01.03.2018-31.12.2018',
                          prices: [
                                  ['Cameră Single', '115 RON'],
                                  ['Cameră Double', '130 RON'],
                                  ['Cameră Triple', '165 RON'],
                                  ['-', ''],
                                  ['-', '']
                          ]
                  },
                  special: [
                          {
                                title: 'Tarife EC',
                                subtitle: 'fără Mic Dejun',
                                description: 'Tarife speciale pe durata festivalului Electric Castle',
                                time_span: '18-22.07.2018',
                                prices: [
                                        ['-', ''],
                                        ['Cameră Double', '210 RON'],
                                        ['Cameră Triple', '270 RON'],
                                        ['-', ''],
                                        ['-', '']
                                ]
                          },
                          {
                                title: 'Tarife Untold',
                                subtitle: 'fără Mic Dejun',
                                description: 'Tarife speciale pe durata festivalului Untold',
                                time_span: '02-05.08.2018',
                                prices: [
                                        ['-', ''],
                                        ['Cameră Double', '280 RON'],
                                        ['Cameră Triple', '360 RON'],
                                        ['-', ''],
                                        ['-', '']
                                ]
                          }
                  ]
          }
        },
        {
          header: 'Cazare 2*+',
          text: 'Camerele sunt deschise din august 2017 si dispun de cele mai moderne servicii din unitatea noastră, similare camerelor de 3*. Se găsesc la mansarda corpului de 2*. Apartamentele, sunt compuse din 2 încăperi separate prin ușă: prima cu 1 pat single, iar a doua cu 1 pat dublu. Baia este situată între ele, cu intrare din camera single. Doar încăperea a doua are televizor. Intrarea se face printr-o terasă exterioară. Față de camerele de 2*, sunt echipate suplimentar cu minibar și uscător de păr.',
          prices: {
                  regular: {
                          title: 'Tarife',
                          subtitle: 'fără Mic Dejun',
                          description: 'Tarife standard, de recepție, valabile pe toată durata anului, cu excepția evenimentelor speciale',
                          time_span: '01.03.2018-31.12.2018',
                          prices: [
                                  ['Cameră Single', '135 RON'],
                                  ['Cameră Double', '155 RON'],
                                  ['Cameră Triple', '195 RON'],
                                  ['Apartament Double', '170 RON'],
                                  ['Apartament Triple', '195 RON']
                          ]
                  },
                  special: [
                          {
                                title: 'Tarife EC',
                                subtitle: 'fără Mic Dejun',
                                description: 'Tarife speciale pe durata festivalului Electric Castle',
                                time_span: '18-22.07.2018',
                                prices: [
                                        ['Cameră Single', '185 RON'],
                                        ['Cameră Double', '250 RON'],
                                        ['Cameră Triple', '315 RON'],
                                        ['-', ''],
                                        ['Apartament Triple', '315 RON']
                                ]
                          },
                          {
                                title: 'Tarife Untold',
                                subtitle: 'fără Mic Dejun',
                                description: 'Tarife speciale pe durata festivalului Untold',
                                time_span: '02-05.08.2018',
                                prices: [
                                        ['Cameră Single', '215 RON'],
                                        ['Cameră Double', '330 RON'],
                                        ['Cameră Triple', '420 RON'],
                                        ['-', ''],
                                        ['Apartament Triple', '420 RON']
                                ]
                          }
                  ]
          }
        },
        {
          header: 'Cazare 3*',
          text: 'Vă oferim camere de nefumători cu 1 pat simplu (SGL), cu 1 pat dublu (DBB) și cu 2 paturi single (DBL). Camerele sunt deschise ulterior celor de 2*, ca urmare oferă un confort sporit atât prin instalații cât și prin mobilier. Față de camerele de 2*, sunt echipate suplimentar cu minibar, aer condiționat, uscător de păr și telefon în cameră.',
          prices: {
                  regular: {
                          title: 'Tarife',
                          subtitle: 'fără Mic Dejun',
                          description: 'Tarife standard, de recepție, valabile pe toată durata anului, cu excepția evenimentelor speciale',
                          time_span: '01.03.2018-31.12.2018',
                          prices: [
                                  ['Cameră Single', '135 RON'],
                                  ['Cameră Double', '155 RON'],
                                  ['-', ''],
                                  ['-', ''],
                                  ['-', '']
                          ]
                  },
                  special: [
                          {
                                title: 'Tarife EC',
                                subtitle: 'fără Mic Dejun',
                                description: 'Tarife speciale pe durata festivalului Electric Castle',
                                time_span: '18-22.07.2018',
                                prices: [
                                        ['Cameră Single', '185 RON'],
                                        ['Cameră Double', '250 RON'],
                                        ['-', ''],
                                        ['-', ''],
                                        ['-', '']
                                ]
                          },
                          {
                                title: 'Tarife Untold',
                                subtitle: 'fără Mic Dejun',
                                description: 'Tarife speciale pe durata festivalului Untold',
                                time_span: '02-05.08.2018',
                                prices: [
                                        ['Cameră Single', '215 RON'],
                                        ['Cameră Double', '330 RON'],
                                        ['-', ''],
                                        ['-', ''],
                                        ['-', '']
                                ]
                          }
                  ]
          }
        }
      ],
      price_info: {
        header: 'Info Tarife',
        text: ['Tarifele de cazare afișate sunt exprimate în lei, fără Mic Dejun, includ toate taxele (taxa hotelieră, TVA 9%) și sunt valabile începând cu data de 02 Martie 2018. Aceste tarife pot suferi modificări, dar rezervările se onorează la tarifele comunicate în scris (e-mail, sms).',
        'Tarifele de cazare sunt calculate pentru: număr de persoane /tip de cameră /zi hotelieră. Single, Double și Triple reprezintă numărul de persoane care se vor caza în camera respectivă. De asemenea, nu se va caza în camere un număr de persoane mai mare decât numărul de locuri disponibile. ',
        'Tariful pentru Mic Dejun este de 20 RON /persoană (include TVA 9%).']
      },
      management: {
        header: 'Mesaj Management',
        text: ['Pentru informații suplimentare sau greutăți întâmpinate pe perioada sejurului vă rugăm să contactați Recepția.',
        'Pe perioada sejurului, se face curățenie zilnică la solicitarea clientului. Cel puțin o dată la trei zile se face curățenie generală. Pentru solicitări diferite vă rugăm să contactați Recepția.',
        'Obiectele uitate în camere se predau la Recepție de către cameriste și se anunță respectivii clienți imediat.',
        'În cazul unor eventuale reclamații privind calitatea serviciilor oferite vă rugăm să contactați Recepția pe perioada șederii pentru remedierea acestora.',
        'Vă rugăm să ne oferiți feedback privind serviciile oferite prin mediile care vă sunt mai comode: Recepție, Facebook, TripAdvisor, Booking, Mail, sau alte site-uri. Vă suntem recunoscători pentru acestea indiferent dacă sunt pozitive sau negative.']
      },
      pro_nature: {
        header: 'Mesaj Pro-Natura',
        text: ['FIȚI ALĂTURI DE NOI ÎN APĂRAREA MEDIULUI ÎNCONJURĂTOR!',
        'Gândiți-vă la tonele de prosoape spălate zilnic în hotelurile din întreaga lume fără a fi necesar, și la cantitățile imense de detergenți folosiți care poluează apa.',
        'Decizia vă aparține!',
        'Prosoapele lăsate pe podea înseamnă: "Vă rog să le schimbați"',
        'Prosoapele așezate pe suportul de prosoape înseamnă: "Le voi folosi din nou"',
        'Împreună pentru un mediu înconjurător sănătos!']
      },
      contacts: {
        vilarosa: {
          campany: 'S.C. 4 Anotimpuri Turism S.R.L.',
          country: 'România',
          address: '400664 Cluj-Napoca, Str. Frunzişului nr.4',
          phone: 'T : +40 264 425 507',
          fax: 'F : +40 264 425 473',
          mobile: 'M :+40 747 111 961',
          email: 'office@vilarosa.ro',
          website: 'www.vilarosa.ro',
          company_id: 'RO26403597, J12/48/2010',
          bank_name: 'Raiffeisen Bank Cluj',
          bank_account: 'RO38RZBR0000060012406397',
          social_capital: 'capital social 200RON',
          certificates: ['Certificate Clasificare MDRT',
                        'Certificate Manager CEDES',
                        'Certificat Manager ANTREC',
                        'Calitatea Serviciilor CEDES'
                        ]
        },
        authorities: [
                {
                  accronym: 'ANPC',
                  name: 'Autoritatea Națională pentru Protecția Consumatorilor',
                  phone: ['021-9551', '0264-431.367'],
                  email: 'reclamatii.cluj@opc.ro',
                  website: 'www.anpc.gov.ro'
                },
                {
                  accronym: 'ANSVSA',
                  name: 'Autoritatea Națională Sanitar Veterinară și pentru Siguranța Alimentelor',
                  phone: ['0264-445.729', '0264-448.177'],
                  email: 'dsvcj@rdslink.ro',
                  website: 'www.ansvsa.ro'
                },
                {
                  accronym: 'ANT-DGCAT',
                  name: 'Autoritatea Națională pentru Turism – Direcția Generală Control și Autorizare Turism ',
                  phone: ['0800-868.282'],
                  email: '',
                  website: ''
                }
        ]
      }
    },
    text_en: {
      vilarosa: {
        header: 'Welcome!',
        text: ['']
      }

    }
  },
  getters: {
    // return site text in the selected language
    get_text: state => {
      if (state.lang_select == 'RO') {
        return state.text_ro
      } else {
        return state.text_en
      }
    }
  },
  mutations: {
    LANG_TOGGLE: (state) => {
      if (state.lang_select == 'RO') {
        state.lang_select = 'EN'
      } else {
        state.lang_select = 'RO'
      }
    }
  },
  actions: {
    LANG_TOGGLE_ACT: function ({ commit }) {
      // console.log('@store: LANG_TOGGLE')
      commit('LANG_TOGGLE')
    },
  }
})
