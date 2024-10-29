import {FunctionComponent} from 'react';
import upperFirst from 'lodash/upperFirst';
import {fontSizes, fonts} from '@/styles/design-tokens';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {LOREM_IPSUM} from '@/styleguide/stylguide.constants';

const COLOR_CNAMES = [
  'text-body',
  'text-copy',
  'text-primary',
  'text-primary',
  'text-error',
  'text-warning',
  'text-success',
];

export const StyleguideTypography: FunctionComponent = () => (
  <>
    <StyleguideTitle>Typography</StyleguideTitle>

    <StyleguideSection title="Text sizes">
      <div className="w-full overflow-hidden">
        {Object.keys(fontSizes)
          .reverse()
          .map((size, index) => (
            <p className={`text-${size} mb-3`} key={size}>
              <strong>{size.toUpperCase()}:</strong> {getIpsumLines(index + 1)}
            </p>
          ))}
      </div>
    </StyleguideSection>

    <StyleguideSection title="Line heights">
      <div className="flex gap-3">
        {Object.keys(fontSizes)
          .reverse()
          .map((size) => (
            <div
              className={`text-${size} flex-1 overflow-hidden h-40 border p-4 rounded-md bg-glass-darker`}
              key={size}
            >
              <strong>{upperFirst(size)}:</strong> {getIpsumLines(10)}
            </div>
          ))}
      </div>
    </StyleguideSection>

    <StyleguideSection title="Text colors">
      {COLOR_CNAMES.map((cname) => (
        <p className={cname} key={cname}>
          {cname}
        </p>
      ))}
    </StyleguideSection>

    <StyleguideSection title="Font faces">
      {Object.keys(fonts).map((font) => (
        <p className={`font-${font}`} key={font}>
          {upperFirst(font)}
        </p>
      ))}
    </StyleguideSection>
  </>
);

const getIpsumLines = (amount: number) =>
  LOREM_IPSUM.slice(0, amount).join(' ');
