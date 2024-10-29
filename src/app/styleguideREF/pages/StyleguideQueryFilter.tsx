import {FunctionComponent} from 'react';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {
  QueryFilterDisplay,
  QueryFilterDisplayProps,
} from '@/components/QueryFilterDisplay/QueryFilterDisplay';
import {
  CONJUNCTIVE_OPERATORS,
  WHERE_OPERATORS,
} from '@/components/QueryFilterDisplay/QueryFilterDisplay.constants';
import clsx from 'clsx';
import {humanizeWhereClause} from '@/components/QueryFilterDisplay/QueryFilterDisplay.utils';

const QUERY_FILTER_EXAMPLES: [
  string,
  'vertical' | 'horizontal',
  {sql: string; props?: Partial<QueryFilterDisplayProps>}[],
][] = [
  [
    'Simple clauses',
    'horizontal',
    WHERE_OPERATORS.map((op) => ({sql: `WHERE foo ${op} "bar"`})),
  ],
  [
    'Default prefix',
    'horizontal',
    [{sql: 'foo > 1', props: {defaultPrefix: 'HAVING'}}],
  ],

  ['No prefix', 'horizontal', [{sql: 'foo > 1'}]],
  [
    'Multiple clauses',
    'horizontal',
    [
      ...CONJUNCTIVE_OPERATORS.map((conj) => ({
        sql: `WHERE foo = 5 ${conj} bar <= 10`,
      })),
      {sql: 'WHERE foo IS NULL AND bar IS NOT 0'},
    ],
  ],
  [
    'Mixed examples',
    'horizontal',
    [
      {sql: 'WHERE (item).price > 9.99'},
      {sql: 'WHERE (on_hand.item).price > 9.99'},
      {
        sql: 'WHERE total_sales > (SELECT SUM(total_sales)/10 FROM regional_sales)',
      },
      {sql: 'WHERE region IN (SELECT region FROM top_regions)'},
      {sql: 'WHERE g.id = sg.link AND NOT is_cycle'},
      {
        sql: "WHERE (id, name, \"key\") IN ((1, 'name one', 'key one'), (2, 'name two', 'key two'))",
      },
      {
        sql: "WHERE c.content_id = 1 AND  cf.key_name = 'free_shipping' AND cf.value = 'yes'",
      },
    ],
  ],
  [
    'Complex examples',
    'vertical',
    [
      {
        sql: [
          'WHERE yearWeek BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 2 WEEK)',
          'AND DATE_SUB(CURRENT_DATE(), INTERVAL 1 WEEK)',
          'OR yearWeek BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 1 WEEK)',
          'AND CURRENT_DATE()',
        ].join(' '),
        props: {layout: 'vertical'},
      },
      {sql: "WHERE DATE_FORMAT(co.order_date, '%Y-%m-%d') = '2018-07-10'"},
      {sql: "WHERE EDLEVEL > 12 AND (WORKDEPT = 'E11' OR WORKDEPT = 'E21')"},
      {
        sql: "WHERE LOWER(latest_date_imo__imo__vessel_sub_sub_type) = LOWER('VLGC') AND LOWER(latest_date_imo__imo__vessel_manager) LIKE LOWER('%BW Fleet%') AND eta >= CAST(GETDATE() AS DATE)",
      },
    ],
  ],
  [
    'Include functions',
    'vertical',
    [{sql: "WHERE LOWER(imo__vessel_name) = LOWER('HUMORIST')"}],
  ],
];

export const StyleguideQueryFilters: FunctionComponent = () => (
  <>
    <StyleguideTitle>Query Filter displays</StyleguideTitle>

    {QUERY_FILTER_EXAMPLES.map(([title, layout, examples]) => (
      <StyleguideSection title={title} key={title}>
        <div
          className={clsx(
            'flex gap-3 flex-wrap',
            layout === 'vertical' && 'flex-col items-start',
          )}
        >
          {examples.map(({sql, props = {}}) => (
            <>
              <QueryFilterDisplay
                key={sql}
                fallback={() => (
                  <span className="bg-error rounded py-1 px-2 text-sm">
                    {sql}
                  </span>
                )}
                {...props}
              >
                {sql}
              </QueryFilterDisplay>

              <span className="font-mono bg-deep-darker text-secondary text-xs rounded inline-flex items-center px-3 py-2">
                {humanizeWhereClause(sql)}
              </span>
            </>
          ))}
        </div>
      </StyleguideSection>
    ))}

    <StyleguideSection title="Default fallback component">
      <div className="flex justify-start">
        <QueryFilterDisplay>I&apos;m not valid SQL</QueryFilterDisplay>
      </div>
    </StyleguideSection>
  </>
);
