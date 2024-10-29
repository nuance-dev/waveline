import {FunctionComponent, useState} from 'react';
import {ButtonVariant} from '@/components/ui/Button/Button.constants';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {Alert, AlertProps, AlertVariant} from '@/components/ui/Alert/Alert';
import {Button} from '@/components/ui/Button/Button';
import {IconMoodSmile, IconMouse} from '@tabler/icons-react';
import {LOREM_IPSUM} from '@/styleguide/stylguide.constants';

const VARIANT_OPTIONS: {
  variant: AlertVariant;
  buttonVariant?: ButtonVariant;
}[] = [
  {variant: 'default'},
  {variant: 'error', buttonVariant: 'danger'},
  {variant: 'warning', buttonVariant: 'warning'},
  {variant: 'primary', buttonVariant: 'primary'},
  {variant: 'success', buttonVariant: 'success'},
];

const getProps = (
  buttonVariant?: ButtonVariant,
): [string, Partial<AlertProps>][] => [
  ['Default', {}],
  ['Round', {round: true}],
  [
    'With icon and button',
    {
      icon: IconMoodSmile,
      button: (
        <Button iconLeft={IconMouse} variant={buttonVariant}>
          I feel clicky
        </Button>
      ),
    },
  ],
  [
    "With 'left' prop",
    {icon: null, left: <div className="w-4 h-4 rounded-full bg-glass" />},
  ],
];

export const StyleguideAlerts: FunctionComponent = () => (
  <>
    <StyleguideTitle>Alerts</StyleguideTitle>

    {VARIANT_OPTIONS.map(({variant, buttonVariant}) => (
      <StyleguideSection key={variant} title={`Variant: ${variant}`}>
        <div className="flex gap-4 flex-col">
          {getProps(buttonVariant).map(([, props], index) => (
            <AlertExample key={index} alertProps={{variant, ...props}} />
          ))}
        </div>
      </StyleguideSection>
    ))}
  </>
);

const AlertExample: FunctionComponent<{
  alertProps: Partial<AlertProps>;
}> = ({alertProps}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Alert {...alertProps}>
      {LOREM_IPSUM.slice(0, showMore ? 15 : 1).join(' ')}

      <button
        className="font-bold ml-1.5"
        onClick={() => setShowMore(!showMore)}
      >
        [{showMore ? 'less' : 'more'}&hellip;]
      </button>
    </Alert>
  );
};
