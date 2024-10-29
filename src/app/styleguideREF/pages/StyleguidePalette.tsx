import {useTheme} from '@/context/theme';
import {FunctionComponent, useState} from 'react';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {parseRGBA} from '@/styles/design-tokens.utils';
import clsx from 'clsx';
import {copyToClipboard} from '@/util/clipboard';
import {Switch} from '@/components/ui/Switch/Switch';

const CHECKERS_IMAGE_URL = `\
  url('data:image/svg+xml,\
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill-opacity=".05" >\
      <rect x="5" width="5" height="5" />\
      <rect y="5" width="5" height="5" />\
    </svg>\
  ')`;

export const StyleguidePalette: FunctionComponent = () => {
  const {colors} = useTheme();
  const [showCheckers, setShowCheckers] = useState(true);

  return (
    <>
      <StyleguideTitle>Color palette</StyleguideTitle>

      <Switch value={showCheckers} onChange={setShowCheckers}>
        Show checkers
      </Switch>

      {Object.entries(colors).map(([categoryKey, categoryPalette]) => (
        <StyleguideSection key={categoryKey} title={`Category: ${categoryKey}`}>
          {Object.entries(categoryPalette).map(([colorRootKey, variants]) => (
            <div
              key={colorRootKey}
              className="flex gap-1 mb-1 max-lg:flex-col max-lg:mb-6"
            >
              <span className="lg:w-24 font-mono text-sm text-secondary font-semibold lg:pr-4 flex justify-center lg:justify-end items-center">
                {colorRootKey}
              </span>

              {typeof variants === 'string' ? (
                <PaletteItem value={variants} showCheckers={showCheckers} />
              ) : (
                Object.entries(variants).map(([variantKey, value]) => (
                  <PaletteItem
                    label={variantKey}
                    key={variantKey}
                    value={value as string}
                    showCheckers={showCheckers}
                  />
                ))
              )}
            </div>
          ))}
        </StyleguideSection>
      ))}
    </>
  );
};

const PaletteItem: FunctionComponent<{
  label?: string;
  value: string;
  showCheckers: boolean;
}> = ({label, value, showCheckers}) => {
  const {isDark} = useTheme();
  const lightness = getLightness(value, isDark);

  return (
    <div
      onClick={() => copyToClipboard(value)}
      className={clsx(
        'rounded lg:w-48 text-center font-mono lowercase text-xs font-semibold flex items-between justify-between bg-deep-dark border-deep-dark border relative group cursor-pointer',
        lightness < 65 ? 'text-white' : 'text-black',
      )}
    >
      <div
        className="flex flex-1 rounded overflow-hidden"
        style={showCheckers ? {backgroundImage: CHECKERS_IMAGE_URL} : {}}
      >
        <div
          className="flex-1 py-3 shadow-[#ffffff10_0_0_0_1px_inset]"
          style={{
            backgroundColor: value,
          }}
        >
          <div className="group-hover:opacity-0 transition-opacity">
            {label ? label : <>&nbsp;</>}
          </div>

          <div className="absolute position-center whitespace-nowrap transition-opacity opacity-0 group-hover:opacity-100">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

const getLightness = (color: string, isDark: boolean) => {
  try {
    const {r, g, b, a = 1} = parseRGBA(color.split('(')[1].split(')')[0]);
    if (a < 0.5) return isDark ? 20 : 80;

    const Rlin = (r / 255.0) ** 2.218;
    const Glin = (g / 255.0) ** 2.218;
    const Blin = (b / 255.0) ** 2.218;
    const Ylum = Rlin * 0.2126 + Glin * 0.7156 + Blin * 0.0722;

    return Math.pow(Ylum, 0.43) * 100;
  } catch (err) {
    return 50;
  }
};
