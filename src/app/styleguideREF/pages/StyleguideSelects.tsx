import {Fragment, FunctionComponent, useState} from 'react';
import upperFirst from 'lodash/upperFirst';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {
  Select,
  SelectProps,
  SelectVariant,
} from '@/components/ui/Select/Select';
import {
  IconMoodAngry,
  IconMoodHappy,
  IconMoodSmile,
  IconSparkles,
} from '@tabler/icons-react';
import clsx from 'clsx';

const VARIANTS: SelectVariant[] = ['default', 'outline'];

const SIZES: SelectProps['size'][] = ['large', 'middle', 'small'];

const DEFAULT_PROPS: SelectProps = {
  placeholder: 'Please select one',
  options: [
    {label: 'First option', value: 1},
    {value: 'Second option'},
    {label: 'Third (with icon)', icon: IconSparkles, value: 3},
    ...new Array(20)
      .fill(null)
      .map((_, index) => ({label: `Option ${index + 4}`, value: index + 4})),
  ],
};

const PROPS: [string, SelectProps][] = [
  ['Default', {}],
  ['Round', {round: true}],
  ['With search box', {withSearchBox: true}],
  ['With custom icon', {suffixIcon: <IconMoodAngry stroke={1.5} size={15} />}],
  [
    'With buttons',
    {
      buttons: [
        {icon: IconMoodSmile, text: 'Happy button'},
        {icon: IconMoodAngry, text: 'Angry button'},
      ],
    },
  ],
  [
    'With custom label',
    {
      labelComponent: ({icon: Icon, children}) => (
        <span className="flex gap-2 items-center italic justify-center">
          {!!Icon && <Icon size={20} />}
          {children}
        </span>
      ),
    },
  ],
];

export const StyleguideSelects: FunctionComponent = () => (
  <>
    <StyleguideTitle>Select inputs</StyleguideTitle>

    <CustomSelectSection />

    <ButtonSelectSection />

    {VARIANTS.map((variant) => (
      <StyleguideSection key={variant} title={`Variant: ${variant}`}>
        <div className="flex gap-4">
          {SIZES.map((size) => (
            <div className="flex-1 flexgap-3" key={size}>
              <h2 className="text-copy mb-4 text-lg">{upperFirst(size)}</h2>

              <div className="flex flex-col gap-2">
                {PROPS.map(([label, props]) => (
                  <Fragment key={label}>
                    <h3 className="text-secondary mt-2">{label}</h3>

                    <Select
                      variant={variant}
                      size={size}
                      {...DEFAULT_PROPS}
                      {...props}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </StyleguideSection>
    ))}
  </>
);

const CustomSelectSection: FunctionComponent = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <StyleguideSection title="Custom select">
      <Select.Custom
        options={[
          {value: 'foo', icon: IconMoodAngry, label: 'Foo'},
          {value: 'bar', icon: IconMoodAngry, label: 'Bar'},
        ]}
        withSearchBox
        buttons={[{text: 'Btn 01', onClick: () => null}]}
        popupSize="large"
        value={value}
        allowEmpty
        onChange={setValue}
        placeholder={{icon: IconSparkles, label: 'None'}}
      >
        {({children, icon: Icon, label, isPlaceholder}) => (
          <div className="relative p-2 rounded-md w-[200px] bg-spacegray-light/30">
            <div
              className={clsx(
                'text-italic justify-center flex items-center gap-2',
                isPlaceholder && 'text-secondary italic',
              )}
            >
              {!!Icon && <Icon size={18} stroke={1.4} />}
              {label}
            </div>

            {children}
          </div>
        )}
      </Select.Custom>
    </StyleguideSection>
  );
};

const ButtonSelectSection: FunctionComponent = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <StyleguideSection title="Button select">
      <Select.Button
        size="large"
        round
        variant="primary"
        options={[
          {value: 'foo', icon: IconMoodAngry, label: 'Foo'},
          {value: 'bar', icon: IconMoodHappy, label: 'Bar'},
        ]}
        withSearchBox
        buttons={[{text: 'Btn 01', onClick: () => null}]}
        popupSize="large"
        value={value}
        allowEmpty
        onChange={setValue}
        placeholder={{icon: IconSparkles, label: 'None'}}
      >
        !
      </Select.Button>
    </StyleguideSection>
  );
};
