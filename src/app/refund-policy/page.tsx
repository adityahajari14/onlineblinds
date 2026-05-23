import type { Metadata } from 'next';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Returns & Refunds Policy | Online Blinds Express',
  description: 'Learn how Online Blinds Express handles damaged goods, faulty items, replacements, cancellations, and refunds.',
};

const sections = [
  {
    heading: 'Reporting Damaged or Defective Goods',
    content: (
      <p>
        All items are quality checked before dispatch, but please inspect your order as soon as it arrives. Damage or
        defects caused by manufacturing or transit must be reported within <strong>3 working days</strong> of delivery.
      </p>
    ),
  },
  {
    heading: 'How to Report an Issue',
    content: (
      <p>
        Email <a href="mailto:sales@onlineblindsexpress.co.uk">sales@onlineblindsexpress.co.uk</a> with your order
        details and a clear description of the issue. We aim to respond within <strong>1 working day</strong>, and no
        later than <strong>3 working days</strong>.
      </p>
    ),
  },
  {
    heading: 'Claim Investigation',
    content: (
      <p>
        Please do not fit or install the blind while your claim is being reviewed. We may ask for photographs, further
        details, or the return of the product for inspection before confirming the outcome.
      </p>
    ),
  },
  {
    heading: 'Original Packaging',
    content: (
      <p>
        Please keep all original packaging until your order has been checked. If packaging has been disposed of and
        replacement packaging is needed for a return or inspection, additional packaging charges may apply.
      </p>
    ),
  },
  {
    heading: 'Replacements',
    content: (
      <p>
        If our investigation confirms a manufacturing fault or transit damage, we will provide a like-for-like
        replacement for the affected made-to-measure product.
      </p>
    ),
  },
  {
    heading: 'Replacement Changes',
    content: (
      <p>
        Replacement orders must match the original order. We cannot change measurements, colours, fabrics, controls, or
        other specifications as part of a replacement.
      </p>
    ),
  },
  {
    heading: 'Returning Faulty Items',
    content: (
      <p>
        If a return is required after our investigation, faulty items must be returned within <strong>30 days</strong> of
        return approval and must meet the criteria confirmed during the claim review.
      </p>
    ),
  },
  {
    heading: 'Cancellations',
    content: (
      <p>
        Because our blinds are made to your exact specifications, orders cannot be changed or cancelled once they have
        entered production.
      </p>
    ),
  },
  {
    heading: 'Refunds',
    content: (
      <p>
        If an item is discontinued or out of stock before manufacturing begins, we will notify you and issue a full
        refund. We may also cancel and refund an order due to non-payment, discontinued stock, refusal to cover
        applicable delivery costs, pricing errors, or internal system errors.
      </p>
    ),
  },
  {
    heading: 'Delivery and Failed Delivery',
    content: (
      <p>
        Blinds are typically manufactured within <strong>3-5 working days</strong> and dispatched after production.
        Deliveries usually take place Monday to Friday and may require a signature. Multiple failed delivery attempts may
        incur re-delivery charges. Items returned to us by the courier will be held for <strong>4 weeks</strong> before
        disposal.
      </p>
    ),
  },
  {
    heading: 'Warranty',
    content: (
      <p>
        Our blinds are backed by a <strong>5-year warranty</strong> against manufacturing defects on components and
        fabrics. This warranty does not cover fair wear and tear, misuse, accidental damage, alterations, fading caused
        by prolonged sunlight exposure, incorrect installation, or commercial use.
      </p>
    ),
  },
  {
    heading: 'Technical Specifications',
    content: (
      <p>
        Please allow for a machine manufacturing tolerance of <strong>+/- 4mm</strong> on all blinds, or up to{' '}
        <strong>+/- 6mm</strong> depending on fabric type. Large Day &amp; Night blinds over <strong>1800mm</strong> wide
        may show a slight wave in the fabric due to size and fabric weight restrictions.
      </p>
    ),
  },
  {
    heading: 'Contact',
    content: (
      <>
        <p>
          For returns or refund questions, please email{' '}
          <a href="mailto:sales@onlineblindsexpress.co.uk">sales@onlineblindsexpress.co.uk</a>.
        </p>
        <p>
          Response time: <strong>1-3 working days</strong>.
        </p>
      </>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground py-14 md:py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <p className="font-jost text-[13px] font-medium uppercase tracking-[0.7px] text-white/60">
              Legal
            </p>
            <h1 className="mt-2 font-display text-[32px] font-semibold leading-tight text-white md:text-[48px]">
              Returns &amp; Refunds Policy
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-[860px] px-6 pt-10 pb-4">
          <p className="font-jost text-[15px] leading-[1.75] text-muted">
            This Returns &amp; Refunds Policy explains how Online Blinds Express handles damaged goods, faulty items,
            replacements, cancellations, and refunds for made-to-measure blinds.
          </p>
        </section>

        {/* Sections */}
        <section className="mx-auto max-w-[860px] px-6 pb-16 pt-4">
          <div className="divide-y divide-border">
            {sections.map((section) => (
              <div key={section.heading} className="py-8">
                <h2 className="mb-4 font-display text-[20px] font-semibold text-foreground md:text-[22px]">
                  {section.heading}
                </h2>
                <div className="font-jost text-[15px] leading-[1.75] text-muted [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80 [&_p+p]:mt-3">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
