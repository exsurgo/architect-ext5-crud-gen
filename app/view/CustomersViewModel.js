Ext.define('CRUD.view.CustomersViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customers',

    stores: {
        customers: {
            storeId: 'Customers',
            model: 'CRUD.model.Customer',
            data: [
                {
                    id: 517,
                    firstName: 'Eddie',
                    lastName: 'Torres',
                    isPremium: true,
                    totalPurchases: 344.98,
                    email: 'jryan@photobug.mil',
                    phone: '(307) 217-1775',
                    signupDate: '12/27/2013',
                    streetAddress: '003 Quincy Plaza',
                    city: 'Nesciunt',
                    state: 'NJ',
                    zip: '39451',
                    country: 'Cameroon',
                    comments: '<B><u>excepturi</u></b> ipsam.<B>quidem</b> dolore aspernatur voluptas.'
                },
                {
                    id: 13,
                    firstName: 'Nora',
                    lastName: 'Perez',
                    isPremium: true,
                    totalPurchases: 912.37,
                    email: 'eporter@plajo.org',
                    phone: '(298) 764-4982',
                    signupDate: '4/6/2001',
                    streetAddress: '8 Carioca Plaza',
                    city: 'Animi',
                    state: 'FL',
                    zip: '54215',
                    country: 'Uganda',
                    comments: '<B><u>laborum</u></b> et debitis quidem.'
                },
                {
                    id: 63,
                    firstName: 'Willie',
                    lastName: 'Jackson',
                    isPremium: false,
                    totalPurchases: 512.17,
                    email: 'foliver@twitterbeat.org',
                    phone: '(868) 381-2806',
                    signupDate: '4/18/2006',
                    streetAddress: '1 Jenifer Way',
                    city: 'Illum',
                    state: 'RI',
                    zip: '59921',
                    country: 'Aruba',
                    comments: '<U><u>dolor</u></u> est dicta commodi.'
                },
                {
                    id: 828,
                    firstName: 'Della',
                    lastName: 'Rogers',
                    isPremium: false,
                    totalPurchases: 908.34,
                    email: 'parmstrong@meejo.com',
                    phone: '(480) 330-8734',
                    signupDate: '1/14/2009',
                    streetAddress: '8080 Maryland Trail',
                    city: 'Magnam',
                    state: 'AS',
                    zip: '04322',
                    country: 'Albania',
                    comments: '<U><u><b>aut</b></u></u> ut vero eius facilis.'
                },
                {
                    id: 481,
                    firstName: 'Homer',
                    lastName: 'Scott',
                    isPremium: true,
                    totalPurchases: 551.25,
                    email: 'jfrazier@rhynoodle.biz',
                    phone: '(727) 835-5255',
                    signupDate: '1/2/2001',
                    streetAddress: '997 Green Court',
                    city: 'Rerum',
                    state: 'IL',
                    zip: '73642',
                    country: 'Bhutan',
                    comments: '<B>quia</b> aut est necessitatibus.'
                },
                {
                    id: 516,
                    firstName: 'Clifford',
                    lastName: 'Baker',
                    isPremium: true,
                    totalPurchases: 897.87,
                    email: 'aroberts@thoughtworks.net',
                    phone: '(391) 477-3799',
                    signupDate: '9/8/2010',
                    streetAddress: '198 Hovde Trail',
                    city: 'Neque',
                    state: 'PW',
                    zip: '95819',
                    country: 'Pitcairn Island',
                    comments: '<U><b>asperiores</b></u> modi rerum quibusdam.'
                },
                {
                    id: 169,
                    firstName: 'Evelyn',
                    lastName: 'Cooper',
                    isPremium: false,
                    totalPurchases: 812.66,
                    email: 'mjohnston@vimbo.com',
                    phone: '(589) 163-6670',
                    signupDate: '11/16/2003',
                    streetAddress: '304 Monica Crossing',
                    city: 'Labore',
                    state: 'SC',
                    zip: '83369',
                    country: 'Niue',
                    comments: 'Delectus deleniti quisquam.Quidem adipisci est dolorem.'
                },
                {
                    id: 469,
                    firstName: 'Lester',
                    lastName: 'Richardson',
                    isPremium: false,
                    totalPurchases: 225.56,
                    email: 'elane@twinte.gov',
                    phone: '(778) 577-1916',
                    signupDate: '5/13/2008',
                    streetAddress: '43255 Russell Place',
                    city: 'Rerum',
                    state: 'MD',
                    zip: '26883',
                    country: 'Bhutan',
                    comments: '<U>et</u> ab.Tenetur ducimus ut aut rerum.'
                },
                {
                    id: 181,
                    firstName: 'Luther',
                    lastName: 'Scott',
                    isPremium: false,
                    totalPurchases: 689.98,
                    email: 'jgonzalez@wikizz.org',
                    phone: '(066) 002-6406',
                    signupDate: '5/2/2001',
                    streetAddress: '06534 Corscot Crossing',
                    city: 'Perspiciatis',
                    state: 'ID',
                    zip: '71711',
                    country: 'Lithuania',
                    comments: '<U>nihil</u> ipsum eaque.'
                },
                {
                    id: 988,
                    firstName: 'Floyd',
                    lastName: 'Brooks',
                    isPremium: false,
                    totalPurchases: 169.9,
                    email: 'vgonzalez@yamia.gov',
                    phone: '(577) 490-0836',
                    signupDate: '5/3/2012',
                    streetAddress: '4 Almo Pass',
                    city: 'Doloribus',
                    state: 'GU',
                    zip: '24537',
                    country: 'Norfolk Island',
                    comments: '<U>ratione</u> et ex voluptatibus.'
                },
                {
                    id: 308,
                    firstName: 'Viola',
                    lastName: 'Gonzalez',
                    isPremium: false,
                    totalPurchases: 232.76,
                    email: 'jrussell@blogspan.com',
                    phone: '(284) 539-4041',
                    signupDate: '3/3/2009',
                    streetAddress: '05411 Loomis Park',
                    city: 'Exercitationem',
                    state: 'CO',
                    zip: '75734',
                    country: 'Isle of Man',
                    comments: 'Quisquam perspiciatis corrupti rerum.'
                },
                {
                    id: 550,
                    firstName: 'Mamie',
                    lastName: 'Jones',
                    isPremium: false,
                    totalPurchases: 667.78,
                    email: 'cwebb@jaxnation.com',
                    phone: '(000) 645-2897',
                    signupDate: '8/22/2006',
                    streetAddress: '2 Delaware Terrace',
                    city: 'Corporis',
                    state: 'WI',
                    zip: '31268',
                    country: 'Tokelau',
                    comments: '<U><u>qui</u></u> voluptatem omnis.Beatae maxime quis consequatur.'
                },
                {
                    id: 294,
                    firstName: 'Martin',
                    lastName: 'Reed',
                    isPremium: false,
                    totalPurchases: 536.09,
                    email: 'hwells@mymm.info',
                    phone: '(036) 269-8336',
                    signupDate: '3/2/2007',
                    streetAddress: '685 Colorado Lane',
                    city: 'Laboriosam',
                    state: 'NJ',
                    zip: '04124',
                    country: 'Cameroon',
                    comments: '<B><b>nemo</b></b> ut non consectetur perferendis.'
                },
                {
                    id: 915,
                    firstName: 'Kathryn',
                    lastName: 'Phillips',
                    isPremium: false,
                    totalPurchases: 703.1,
                    email: 'karnold@fivebridge.biz',
                    phone: '(227) 043-6076',
                    signupDate: '11/15/2008',
                    streetAddress: '5477 Hoepker Hill',
                    city: 'Dolorem',
                    state: 'NM',
                    zip: '26836',
                    country: 'Bermuda',
                    comments: '<B><u><b>rerum</b></u></b> incidunt provident quibusdam sunt.'
                },
                {
                    id: 730,
                    firstName: 'Nora',
                    lastName: 'Diaz',
                    isPremium: false,
                    totalPurchases: 290.01,
                    email: 'hwells@mymm.info',
                    phone: '(941) 113-4980',
                    signupDate: '10/27/2010',
                    streetAddress: '685 Colorado Lane',
                    city: 'Consequuntur',
                    state: 'CO',
                    zip: '90132',
                    country: 'French Guiana',
                    comments: '<U>esse</u> iusto dolore.'
                },
                {
                    id: 327,
                    firstName: 'Della',
                    lastName: 'Ramirez',
                    isPremium: true,
                    totalPurchases: 466.43,
                    email: 'vgonzalez@yamia.gov',
                    phone: '(194) 611-1807',
                    signupDate: '7/18/2004',
                    streetAddress: '685 Colorado Lane',
                    city: 'Nihil',
                    state: 'AR',
                    zip: '05150',
                    country: 'Cameroon',
                    comments: '<U><b>molestiae</b></u> delectus sit.Totam rerum et harum.'
                },
                {
                    id: 788,
                    firstName: 'Beulah',
                    lastName: 'Howard',
                    isPremium: false,
                    totalPurchases: 583.59,
                    email: 'ewatkins@dazzlesphere.biz',
                    phone: '(007) 493-1035',
                    signupDate: '8/16/2012',
                    streetAddress: '685 Colorado Lane',
                    city: 'Rerum',
                    state: 'MH',
                    zip: '70665',
                    country: 'Isle of Man',
                    comments: '<U>commodi</u> inventore.<U>asperiores</u> maiores quo autem veniam.'
                },
                {
                    id: 755,
                    firstName: 'Rosa',
                    lastName: 'Morgan',
                    isPremium: false,
                    totalPurchases: 591.71,
                    email: 'jgonzalez@wikizz.org',
                    phone: '(028) 927-8794',
                    signupDate: '4/5/2006',
                    streetAddress: '1036 Holmberg Lane',
                    city: 'Corporis',
                    state: 'SC',
                    zip: '75097',
                    country: 'Cayman Islands',
                    comments: '<U>harum</u> animi maiores.'
                },
                {
                    id: 594,
                    firstName: 'Edgar',
                    lastName: 'Brooks',
                    isPremium: true,
                    totalPurchases: 749.1,
                    email: 'rsnyder@skajo.name',
                    phone: '(738) 980-3803',
                    signupDate: '4/1/2008',
                    streetAddress: '44561 Dovetail Point',
                    city: 'Totam',
                    state: 'FM',
                    zip: '61460',
                    country: 'Mauritania',
                    comments: '<U>consectetur</u> est quam.Maxime delectus corporis inventore.'
                },
                {
                    id: 59,
                    firstName: 'May',
                    lastName: 'Hill',
                    isPremium: true,
                    totalPurchases: 540.06,
                    email: 'vgonzalez@yamia.gov',
                    phone: '(169) 115-8693',
                    signupDate: '3/7/2005',
                    streetAddress: '198 Hovde Trail',
                    city: 'Rerum',
                    state: 'IN',
                    zip: '36274',
                    country: 'Bermuda',
                    comments: '<U>aut</u> minus.Dolor blanditiis iure consequatur.'
                },
                {
                    id: 719,
                    firstName: 'Della',
                    lastName: 'Watson',
                    isPremium: true,
                    totalPurchases: 716.66,
                    email: 'jfernandez@mynte.name',
                    phone: '(706) 000-2935',
                    signupDate: '2/14/2009',
                    streetAddress: '28 Banding Drive',
                    city: 'Voluptas',
                    state: 'MI',
                    zip: '50927',
                    country: 'Gambia',
                    comments: 'Quia error ut.'
                },
                {
                    id: 137,
                    firstName: 'Peter',
                    lastName: 'Jackson',
                    isPremium: true,
                    totalPurchases: 565.23,
                    email: 'probertson@thoughtstorm.com',
                    phone: '(746) 360-2984',
                    signupDate: '4/8/2004',
                    streetAddress: '64 Mcbride Court',
                    city: 'Explicabo',
                    state: 'SC',
                    zip: '00418',
                    country: 'Finland',
                    comments: 'Sunt optio.<B>voluptatem</b> eaque qui ex dolorum.'
                },
                {
                    id: 738,
                    firstName: 'Mae',
                    lastName: 'Taylor',
                    isPremium: false,
                    totalPurchases: 339.15,
                    email: 'ehernandez@rhycero.biz',
                    phone: '(734) 768-1912',
                    signupDate: '2/20/2005',
                    streetAddress: '15 Charing Cross Street',
                    city: 'Quisquam',
                    state: 'PR',
                    zip: '44397',
                    country: 'Cook Islands',
                    comments: '<U><b>eos</b></u> fugit rem aut.'
                },
                {
                    id: 665,
                    firstName: 'Ruby',
                    lastName: 'Moore',
                    isPremium: false,
                    totalPurchases: 703.03,
                    email: 'ewatkins@dazzlesphere.biz',
                    phone: '(728) 185-0151',
                    signupDate: '4/24/2011',
                    streetAddress: '421 Arrowood Junction',
                    city: 'Cumque',
                    state: 'NH',
                    zip: '00751',
                    country: 'Mali',
                    comments: 'Odio temporibus autem quia suscipit.'
                },
                {
                    id: 451,
                    firstName: 'Jim',
                    lastName: 'Evans',
                    isPremium: false,
                    totalPurchases: 954.06,
                    email: 'jtucker@kanoodle.net',
                    phone: '(120) 164-1947',
                    signupDate: '9/22/2004',
                    streetAddress: '1 Jenifer Way',
                    city: 'Officia',
                    state: 'MI',
                    zip: '88244',
                    country: 'Cameroon',
                    comments: 'Consectetur aut sed.'
                },
                {
                    id: 190,
                    firstName: 'Lloyd',
                    lastName: 'Wilson',
                    isPremium: true,
                    totalPurchases: 81.69,
                    email: 'jtucker@kanoodle.net',
                    phone: '(701) 946-0048',
                    signupDate: '4/11/2009',
                    streetAddress: '2441 Di Loreto Lane',
                    city: 'Reiciendis',
                    state: 'AL',
                    zip: '87142',
                    country: 'Isle of Man',
                    comments: '<U><u><u>cum</u></u></u> voluptatem qui asperiores.'
                },
                {
                    id: 829,
                    firstName: 'Pauline',
                    lastName: 'Howard',
                    isPremium: false,
                    totalPurchases: 931.62,
                    email: 'smontgomery@zoovu.name',
                    phone: '(178) 548-2755',
                    signupDate: '6/18/2003',
                    streetAddress: '00 Surrey Drive',
                    city: 'Eveniet',
                    state: 'PW',
                    zip: '07474',
                    country: 'Macau',
                    comments: '<U><b>deserunt</b></u> sed quo repellat.'
                },
                {
                    id: 820,
                    firstName: 'Fannie',
                    lastName: 'Wilson',
                    isPremium: false,
                    totalPurchases: 324.97,
                    email: 'jtucker@kanoodle.net',
                    phone: '(209) 435-7476',
                    signupDate: '7/8/2004',
                    streetAddress: '9078 Schiller Place',
                    city: 'Voluptatem',
                    state: 'NV',
                    zip: '36427',
                    country: 'Georgia',
                    comments: '<U><u><b><b>sequi</b></b></u></u> ipsa vitae.'
                },
                {
                    id: 961,
                    firstName: 'Frederick',
                    lastName: 'Carter',
                    isPremium: true,
                    totalPurchases: 244.84,
                    email: 'bbrown@flipbug.info',
                    phone: '(958) 627-7131',
                    signupDate: '11/18/2007',
                    streetAddress: '67 Sachtjen Way',
                    city: 'Atque',
                    state: 'WV',
                    zip: '14494',
                    country: 'Philippines',
                    comments: 'Omnis illo placeat.'
                },
                {
                    id: 941,
                    firstName: 'Edwin',
                    lastName: 'Wilson',
                    isPremium: true,
                    totalPurchases: 956.4,
                    email: 'parmstrong@meejo.com',
                    phone: '(291) 114-3387',
                    signupDate: '7/21/2002',
                    streetAddress: '4520 Northport Drive',
                    city: 'Exercitationem',
                    state: 'LA',
                    zip: '40436',
                    country: 'Macau',
                    comments: '<U><b><b>incidunt</b></b></u> facilis exercitationem aut.'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }
    }

});