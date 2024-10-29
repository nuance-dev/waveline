import {FunctionComponent, useState} from 'react';
import upperFirst from 'lodash/upperFirst';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {Tooltip} from '@/components/ui/Tooltip/Tooltip';
import {Tag, TagProps, TagSize} from '@/components/ui/Tag/Tag';
import {Button} from '@/components/ui/Button/Button';
import {TAG_STYLE_PRESETS} from '@/components/ui/Tag/Tag.presets';
import {IconEye, IconEyeClosed, IconLemon} from '@tabler/icons-react';

const SIZES: TagSize[] = ['default', 'small'];

const PROPS: [string, TagProps, string?][] = [
  ['Default', {}],
  ...TAG_STYLE_PRESETS.map((preset): [string, TagProps, string?] => [
    `Preset: ${preset}`,
    {color: preset},
  ]),
  [
    'Custom icon',
    {icon: IconLemon, iconClassName: 'text-warning', useDefaults: false},
  ],
  ['Skeleton', {skeleton: true}],
];

export const StyleguideTags: FunctionComponent = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  return (
    <>
      <StyleguideTitle>Tags</StyleguideTitle>

      <div className="flex gap-3">
        <Button
          onClick={() => setShowSkeleton(!showSkeleton)}
          iconLeft={showSkeleton ? IconEyeClosed : IconEye}
        >
          {showSkeleton ? 'Hide' : 'Show'} skeletons
        </Button>
      </div>

      {SIZES.map((size) => (
        <StyleguideSection key={size} title={`Size: ${size}`}>
          <div className="flex-1" key={size}>
            <h2 className="text-copy mb-4 text-lg">{upperFirst(size)}</h2>

            <div className="flex flex-wrap gap-3 items-start">
              {PROPS.map(([label, props, tooltip], index) => {
                const button = (
                  <Tag
                    key={index}
                    size={size}
                    skeleton={showSkeleton}
                    {...props}
                  >
                    {showSkeleton ? 'Foo' : label}
                  </Tag>
                );

                return tooltip ? (
                  <Tooltip title={tooltip}>{button}</Tooltip>
                ) : (
                  button
                );
              })}
            </div>
          </div>
        </StyleguideSection>
      ))}
    </>
  );
};
