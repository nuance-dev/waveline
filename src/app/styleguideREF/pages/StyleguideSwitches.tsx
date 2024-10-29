import {Fragment, FunctionComponent, PropsWithChildren, useState} from 'react';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {Switch} from '@/components/ui/Switch/Switch';
import {Checkbox, CheckboxProps} from '@/components/ui/Checkbox/Checkbox';

const CHECKBOX_EXAMPLES: {title: string; props: CheckboxProps}[] = [
  {title: 'Default', props: {}},
  {title: 'Round', props: {round: true}},
];

export const StyleguideSwitches: FunctionComponent = () => (
  <>
    <StyleguideTitle>Switch</StyleguideTitle>
    <SwitchSection />

    <StyleguideTitle>Checkbox</StyleguideTitle>
    {CHECKBOX_EXAMPLES.map((example) => (
      <Fragment key={example.title}>
        <CheckboxSection example={example} />
      </Fragment>
    ))}
  </>
);

const Subtitle: FunctionComponent<PropsWithChildren> = ({children}) => (
  <h2 className="text-copy text-secondary">{children}</h2>
);

const SwitchSection: FunctionComponent = () => {
  const [value, setValue] = useState(false);

  return (
    <StyleguideSection title="Switch">
      <div className="flex gap-4">
        <Subtitle>Off</Subtitle>
        <Switch value={value} onChange={setValue} />

        <Subtitle>On</Subtitle>
        <Switch value={!value} onChange={(newVal) => setValue(!newVal)} />
      </div>
    </StyleguideSection>
  );
};

const CheckboxSection: FunctionComponent<{
  example: (typeof CHECKBOX_EXAMPLES)[number];
}> = ({example: {title, props}}) => {
  const [checked, setChecked] = useState(false);

  return (
    <StyleguideSection title={title}>
      <div className="flex gap-4">
        <Subtitle>Off</Subtitle>

        <Checkbox {...props} checked={checked} onChange={setChecked} />

        <Subtitle>On</Subtitle>

        <Checkbox
          {...props}
          checked={!checked}
          onChange={(newVal) => setChecked(!newVal)}
        />
      </div>
    </StyleguideSection>
  );
};
