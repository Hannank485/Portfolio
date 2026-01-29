import { AnimatePresence, easeOut, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ImCross } from "react-icons/im";
function ContactForm() {
  const [spam, isSpam] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [isSending, setIsSending] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);
  const serviceID = "service_y97xy9h";
  const templateID = "template_wfrm1af";
  const publicKey = "EM15hGLKlLA25eCvo";
  const handleClose = () => {
    setSuccess(null);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    if (spam) console.log(spam);
    setIsSending(true);
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          isSpam(false);
          setIsSending(false);
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
          setSuccess(false);
        },
      );
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccess(null);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [success]);

  return (
    <>
      <AnimatePresence>
        {success === true ? (
          <EmailModal
            message="Email Sent Successfully"
            color="text-emerald-700"
            handleClose={handleClose}
          />
        ) : success === false ? (
          <EmailModal
            message="Email NOT SENT "
            color="text-red-700"
            handleClose={handleClose}
          />
        ) : (
          success === null
        )}
      </AnimatePresence>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <div>
          <label className="text-accent">Name</label>
          <input
            type="text"
            disabled={isSending || success === true}
            name="user_name"
            required
            placeholder="Enter Your Name"
            className="p-3 w-full rounded-xl bg-gray-100/60 border-2 border-gray-100  focus:bg-white focus:border-accent transition-all duration-400 outline-none mt-2 placeholder:text-muted/60"
            autoComplete="name"
          />
        </div>{" "}
        <div>
          <label className="text-accent">Email</label>
          <input
            type="text"
            disabled={isSending || success === true}
            name="user_email"
            required
            placeholder="Enter Your Email"
            className="p-3 w-full rounded-xl bg-gray-100/60 border-2 border-gray-100  focus:bg-white focus:border-accent transition-all duration-400 outline-none mt-2 placeholder:text-muted/60"
            autoComplete="email"
          />
        </div>{" "}
        {/* Company one is for preventing spambots */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="absolute top-0 -left-[9999px] pointer-events-none size-0 opacity-0"
          onChange={() => isSpam(true)}
        />
        <div>
          <label className="text-accent">Message</label>
          <textarea
            name="user_message"
            disabled={isSending || success === true}
            placeholder="Enter Your Message"
            className="p-3 w-full rounded-xl bg-gray-100/60 border-2 border-gray-100  focus:bg-white focus:border-accent transition-all duration-400 outline-none mt-2 placeholder:text-muted/60 min-h-24 max-h-36"
          />
        </div>
        <motion.input
          disabled={isSending || success != null}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.94 }}
          className="bg-accent text-Bg py-3 rounded-xl cursor-pointer disabled:bg-gray-600 hover:bg-blue-700"
          type="submit"
          value={isSending ? "Sending Message" : "Send Message"}
        />
      </form>
    </>
  );
}

export default ContactForm;

function EmailModal({
  message,
  color,
  handleClose,
}: {
  message: string;
  color: string;
  handleClose: () => void;
}) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0, scale: 0.94 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="absolute right-4 top-[10%] w-80 md:w-100 bg-slate-50 border border-border shadow-lgfont-bold flex items-center justify-center rounded-2xl h-25"
    >
      <ImCross
        className="absolute top-4 left-4 text-red-500 cursor-pointer"
        onClick={handleClose}
      />
      <p className={`text-lg  ${color}`}>{message}</p>
    </motion.div>
  );
}
