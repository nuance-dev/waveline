import {Fragment, FunctionComponent, useState} from 'react';
import upperFirst from 'lodash/upperFirst';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/ui/Button/Button.constants';
import {Button, ButtonProps} from '@/components/ui/Button/Button';
import {
  IconFilterBolt,
  IconMoodSad,
  IconMoodSmile,
  IconResize,
  IconThumbUp,
} from '@tabler/icons-react';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {toast} from 'react-toastify';
import {
  SwitchButton,
  SwitchButtonProps,
} from '@/components/ui/Button/SwitchButton';

const VARIANTS: ButtonVariant[] = [
  'default',
  'primary',
  'compare',
  'primary-compare',
  'danger',
  'warning',
  'transparent',
];

const SIZES: ButtonSize[] = ['larger', 'large', 'default', 'small', 'tiny'];

const PROPS: [string, ButtonProps][] = [
  ['Default', {}],
  ['Static', {interactive: false}],
  ['Round', {round: true}],
  ['Disabled', {disabled: true}],
  ['Loading', {loading: true}],
  ['Link', {href: '/'}],
  ['Icon left', {iconLeft: IconMoodSmile}],
  ['Icon right', {iconRight: IconMoodSmile}],
  ['Both icons', {iconLeft: IconMoodSmile, iconRight: IconMoodSmile}],
  ['Active', {active: true}],
  ['Tooltip', {tooltip: 'I was set directly on the button!'}],
  ...SIZES.map(
    (size) =>
      [
        '',
        {
          iconLeft: IconResize,
          square: true,
          iconSize: size,
          tooltip: `Icon size: ${size}`,
        },
      ] as [string, ButtonProps],
  ),
  ['', {square: true, iconLeft: IconThumbUp, tooltip: 'Square'}],
  [
    '',
    {
      square: true,
      round: true,
      iconLeft: IconThumbUp,
      tooltip: 'Square + Round',
    },
  ],
];

export const StyleguideButtons: FunctionComponent = () => (
  <>
    <StyleguideTitle>Buttons</StyleguideTitle>

    {VARIANTS.map((variant) =>
      [true, false].map((outline) => (
        <Fragment key={String(outline)}>
          <StyleguideSection
            key={variant}
            title={`Variant: ${variant} - ${outline ? 'Outline' : 'Filled'}`}
          >
            <div className="flex gap-4">
              {SIZES.map((size) => {
                const baseProps = {outline, variant, size};

                return (
                  <div className="flex-1" key={size}>
                    <h2 className="text-copy mb-4 text-lg">
                      {upperFirst(size)}
                    </h2>
                    <div className="flex flex-wrap gap-3 items-start">
                      {PROPS.map(([label, props], index) => {
                        const button = (
                          <Button
                            key={index}
                            variant={variant}
                            size={size}
                            outline={outline}
                            {...props}
                          >
                            {label}
                          </Button>
                        );

                        return button;
                      })}
                    </div>

                    <h2 className="text-copy mt-6 mb-4 text-lg">Group</h2>

                    <div className="flex gap-3 flex-wrap items-start">
                      <Button.Group>
                        <Button {...baseProps}>Foo</Button>
                        <Button {...baseProps}>Bar</Button>
                      </Button.Group>

                      <Button.Group>
                        <Button {...baseProps} icon={IconMoodSmile} />
                        <Button {...baseProps}>Bar</Button>
                        <Button {...baseProps} icon={IconMoodSmile} />
                      </Button.Group>

                      <Button.Group>
                        <Button {...baseProps} icon={IconMoodSmile} />
                        {null}
                      </Button.Group>

                      <Button.Group>
                        <Button {...baseProps} icon={IconMoodSmile} round />
                        <Button {...baseProps} icon={IconMoodSad} round />
                      </Button.Group>

                      <Button.Group>
                        <Button {...baseProps} active icon={IconMoodSmile} />
                        <Button {...baseProps} icon={IconMoodSad} round />
                      </Button.Group>

                      <Button.Group>
                        <Button {...baseProps} icon={IconMoodSmile} />
                        <Button
                          {...baseProps}
                          active
                          icon={IconMoodSad}
                          round
                        />
                      </Button.Group>

                      <Button.Group>
                        <Button {...baseProps} icon={IconMoodSmile} round />
                        <Button {...baseProps} icon={IconMoodSad} />
                      </Button.Group>
                    </div>
                  </div>
                );
              })}
            </div>
          </StyleguideSection>
        </Fragment>
      )),
    )}

    <StyleguideSection title="Button Confirmation">
      <h2 className="text-copy mt-6 mb-4 text-lg">Confirm</h2>

      <div className="flex gap-3 flex-wrap items-start">
        <Button.Confirm onConfirm={() => toast.success('Confirmed')}>
          <Button>I need confirmation</Button>
        </Button.Confirm>

        <Button.Confirm onConfirm={() => toast.success('Confirmed')} dangerous>
          <Button variant="danger">I am dangerous</Button>
        </Button.Confirm>

        <Button.Confirm onConfirm={() => null} loading>
          <Button>I am loading (blocking)</Button>
        </Button.Confirm>
      </div>
    </StyleguideSection>

    <StyleguideSection title="Switch Button">
      {SIZES.map((size) => (
        <Fragment key={size}>
          <h2 className="text-copy mt-6 mb-4 text-lg">{upperFirst(size)}</h2>

          <div className="flex gap-3">
            {[true, false].map((value) =>
              [false, true].map((loading) => (
                <SwitchButtonDisplay
                  key={`${String(value)}:${loading}`}
                  size={size}
                  loading={loading}
                  value={value}
                />
              )),
            )}
          </div>
        </Fragment>
      ))}
    </StyleguideSection>
  </>
);

const SwitchButtonDisplay: FunctionComponent<SwitchButtonProps> = (props) => {
  const [value, setValue] = useState(props.value);

  return (
    <SwitchButton
      {...props}
      value={value}
      onChange={(state) => setValue(state)}
      icon={IconFilterBolt}
      iconClassName="text-mango"
    >
      I am {props.value ? 'on' : 'off'}
    </SwitchButton>
  );
};
