import React, { useEffect, useState } from 'react';
import Container from '../container';
import SectionHeading from '../section-heading';

import { SectionProps } from './types';

import socials from '@/data/socials';
import 'tippy.js/dist/tippy.css'; // optional

import { useInView } from '@/hooks/use-in-view';
import { motion, useAnimation, Variants } from 'motion/react';
import toast from 'react-hot-toast';
import AestheticKeyboard from '../aesthetic-keyboard';
import { ToolTipComp } from '../ui/tooltip';

interface ContactProps extends SectionProps {}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    amount: 0.8,
    margin: '-100px 0px',
    once: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      id="contact-section"
      ref={sectionRef}
      className="w-full py-24 md:py-52"
    >
      <Container maxWidth="7xl" className="relative z-10 grid grid-cols-1">
        <div className="flex flex-col space-y-10">
          <span className="">
            <SectionHeading
              noOffset
              className="text-typography relative text-center text-4xl font-light sm:text-5xl"
              text={["Let's work", 'together']}
            />
          </span>
        </div>
        <motion.div
          ref={ref}
          variants={contactInfoVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 flex flex-col items-center space-y-5 text-2xl text-gray-800 lg:text-4xl"
        >
          <ClickableEmail />
          <div className="text-primary mt-5 flex flex-row-reverse gap-[2.5px] rounded-xl border bg-black p-[2.5px]">
            {socials.map((social, i) => {
              return (
                <AestheticKeyboard
                  key={i}
                  className={`flex items-center justify-center text-white/90 ${i === 1 ? 'text-primary bg-white' : ''}`}
                  href={social.url}
                  containerClass={i === 1 ? 'bg-white' : undefined}
                >
                  {social.icon}
                </AestheticKeyboard>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const ClickableEmail = () => {
  const copyMessage = 'Copy 📝';
  const copiedMessage = 'Copied! ✔';
  const [content, setContent] = useState<string>(copyMessage);

  const clickHandler = () => {
    navigator.clipboard.writeText('carloantonioct@gmail.com');
    setContent(copiedMessage);

    toast(() => (
      <span className="flex gap-x-4">
        <motion.span
          animate={{ rotate: [-20, 30] }}
          transition={{
            repeat: Infinity,
            duration: 0.35,
            repeatType: 'mirror',
          }}
          className="grid place-items-center text-2xl"
        >
          👋
        </motion.span>
        <span className="flex flex-col gap-y-1">
          <span className="text-typography font-semibold">Email Copied!</span>
          <span className="text-gray-500">Hope to hear from you soon.</span>
        </span>
      </span>
    ));
  };

  const hoverExitHandler = () => {
    setTimeout(() => {
      setContent(copyMessage);
    }, 200);
  };
  return (
    <ToolTipComp
      hideOnClick={false}
      providerProps={{ disableHoverableContent: true }}
      content={content}
      tooltipProps={{
        delayDuration: 0,
        disableHoverableContent: true,
        onOpenChange: (open) => {
          if (!open) {
            hoverExitHandler();
          }
        },
      }}
    >
      <p onClick={clickHandler} className="cursor-pointer overflow-hidden pb-1">
        <motion.span variants={contactInfoChildVariants} className="block">
          <span className="group relative flex items-center truncate transition">
            <span className="group-hover:bg-primary-foreground/80 absolute h-4/6 w-full transition"></span>
            <span className="text-typography relative font-bold underline">
              carloantonioct@gmail.com
            </span>
          </span>
        </motion.span>
      </p>
    </ToolTipComp>
  );
};

const contactInfoVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const contactInfoChildVariants: Variants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// interface SocialLinkProps extends Social {}

// const SocialLink: React.FC<SocialLinkProps> = ({ name, icon, url }) => {
//   return (
//     <Link href={url} target="_blank" className="group relative p-1">
//       <div className="will-change relative transform overflow-hidden transition ease-in-out group-hover:-translate-y-2">
//         <motion.span
//           variants={contactInfoChildVariants}
//           className="block"
//         ></motion.span>
//       </div>
//       <span className="bg-primary absolute right-0 bottom-0 left-0 mx-auto h-1.5 w-8/12 rounded-[50%] opacity-0 transition group-hover:opacity-70"></span>
//     </Link>
//   );
// };

export default Contact;
