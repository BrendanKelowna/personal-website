import Default, { DefaultProps } from "../Article/Default";
import Section, { AppSectionProps } from "../Section";

//* Types
export type ContactProps = DefaultProps & { containerProps?: AppSectionProps };

//* Definitions

//* Styling

//* Helpers

export default function Contact({
  containerProps,
  ...props
}: React.PropsWithChildren<ContactProps>): JSX.Element {
  return (
    <Section title="Contact" {...containerProps}>
      <Default {...props} />
    </Section>
  );
}
