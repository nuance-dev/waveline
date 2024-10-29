import {FunctionComponent} from 'react';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {CodeBlock, CodeBlockProps} from '@/components/ui/CodeBlock/CodeBlock';

const CODE_SAMPLES: Array<{title: string; sample: CodeBlockProps}> = [
  {
    title: 'SQL',
    sample: {
      language: 'sql',
      value: `
  SELECT
  MAX(price) AS latest_price,
  date
FROM
  \`bigquery-public-data.commodities.naphtha_japan\`
GROUP BY
  date
ORDER BY
  date DESC
LIMIT 1;
`,
    },
  },
  {
    title: 'Python',
    sample: {
      language: 'python',
      value: `
import random

# Python code sample

secret_number = random.randint(1, 100)

while True:
    guess = int(input("Guess the number between 1 and 100: "))
    
    if guess == secret_number:
        print("Congratulations! You guessed the number!")
        break
    elif guess < secret_number:
        print("Too low! Try again.")
    else:
        print("Too high! Try again.")`,
    },
  },

  {
    title: 'TSX',
    sample: {
      language: 'tsx',
      value: `
import {CodeBlock} from '@/components/ui/CodeBlock/CodeBlock';
import {useIsPDF} from '@/pages/chat/components/PDFPreview/PFDPreview.context';
import {ReplyChipComponent} from './ReplyChip.types';
import {ReplyChipBox} from './ReplyChipBox';
import {IconBracketsAngle} from '@tabler/icons-react';

export const CodeChip: ReplyChipComponent = (props) => {
  const isPDF = useIsPDF();

  return isPDF ? null : (
    <ReplyChipBox {...props} icon={IconBracketsAngle} title="Refinement code">
      <CodeBlock
        language="python"
        value={String(props.chip.content)}
        className="bg-code p-4 rounded-xl mt-4"
        codeClassName="text-code-base"
      />
    </ReplyChipBox>
  );
};  
  `,
    },
  },

  {
    title: 'JSON',
    sample: {
      language: 'json',
      value: `
{
  "glossary": {
    "title": "example glossary",
    "GlossDiv": {
      "title": "S",
      "GlossList": {
        "GlossEntry": {
          "ID": "SGML",
          "Abbrev": "ISO 8879:1986",
          "GlossDef": {
            "para": "A meta-markup language, used to create markup languages such as DocBook.",
            "GlossSeeAlso": [
              "GML",
              "XML"
            ]
          },
          "GlossSee": "markup"
        }
      }
    }
  }
}
    `,
    },
  },

  {
    title: 'SCSS',
    sample: {
      language: 'scss',
      value: `
@import url('https://bar.foo.com/baz.css');

@tailwind base;

@layer base {
  html {
    @apply antialiased text-body font-sans bg-deep-dark;
    background: red !important;
  }

  body {
    @apply text-base bg-deep-gradient bg-fixed min-h-screen;
    print-color-adjust: exact;
  }

  @page {
    margin: -1mm;
    size: A4;
  }
}
    `,
    },
  },

  {
    title: 'HTML',
    sample: {
      language: 'html',
      value: `
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" sizes="80x80" type="image/x-icon" />
    <title>Foo</title>
    <link rel="stylesheet" href="./src/bar.scss" />

    <style scoped lang="scss">
      @import 'foo.css';

      .foo {
        background: red;
      }
    </style>

    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-FOO"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'G-BAR');
    </script>

  </head>

  <body class="notranslate">
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <div id="root">Baz</div>
  </body>
</html>
`,
    },
  },
];

export const StyleguideCode: FunctionComponent = () => (
  <>
    <StyleguideTitle>Code</StyleguideTitle>

    {CODE_SAMPLES.map(({sample, title}, i) => (
      <StyleguideSection title={title} key={i}>
        <CodeBlock
          className="bg-code p-3 rounded-lg"
          {...sample}
          value={sample.value.trim()}
        />
      </StyleguideSection>
    ))}
  </>
);
