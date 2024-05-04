import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: "item-1",
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    trigger: "Is it reusable?",
    content:
      "Absolutely. It's designed to be reused in various parts of your application.",
  },
  {
    id: "item-3",
    trigger: "Is it customizable?",
    content:
      "Yes, you can style it with CSS or tailor the components to fit your needs.",
  },
  // Add more items as needed
];

export default function AccordionComponent() {
  return (
    <Accordion type="single" collapsible>
      {accordionItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
