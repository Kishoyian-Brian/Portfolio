import { useRef, useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-6 bg-white border-b border-[#E6E6E6]" ref={ref}>
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Get In Touch
        </h2>

        <p className="text-black/70 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part
          of your vision. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#E6E6E6] rounded-lg focus:ring-2 focus:ring-[#1DA1F2] focus:border-[#1DA1F2] text-black placeholder-black/40 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#E6E6E6] rounded-lg focus:ring-2 focus:ring-[#1DA1F2] focus:border-[#1DA1F2] text-black placeholder-black/40 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-[#E6E6E6] rounded-lg focus:ring-2 focus:ring-[#1DA1F2] focus:border-[#1DA1F2] text-black placeholder-black/40 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[#1DA1F2] text-white font-semibold rounded-full hover:bg-[#1a8cd8] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="text-[#1DA1F2] text-center">
                Message sent successfully!
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">Connect with me</h3>
              <p className="text-black/70 mb-6">
                Prefer to connect on social media? You can find me on these platforms:
              </p>

              <div className="space-y-4">
                <a
                  href="https://github.com/Kishoyian-Brian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-[#E6E6E6] rounded-lg hover:border-[#1DA1F2] hover:bg-[#F7F9F9] transition-colors group"
                >
                  <Github size={24} className="text-black group-hover:text-[#1DA1F2] transition-colors" />
                  <div>
                    <p className="text-black font-medium">GitHub</p>
                    <p className="text-black/60 text-sm">@Kishoyian-Brian</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/brian-mwangi033/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-[#E6E6E6] rounded-lg hover:border-[#1DA1F2] hover:bg-[#F7F9F9] transition-colors group"
                >
                  <Linkedin size={24} className="text-black group-hover:text-[#1DA1F2] transition-colors" />
                  <div>
                    <p className="text-black font-medium">LinkedIn</p>
                    <p className="text-black/60 text-sm">@brian-mwangi033</p>
                  </div>
                </a>

                <a
                  href="mailto:kishoyianbrianmwangi@gmail.com"
                  className="flex items-center gap-4 p-4 border border-[#E6E6E6] rounded-lg hover:border-[#1DA1F2] hover:bg-[#F7F9F9] transition-colors group"
                >
                  <Mail size={24} className="text-black group-hover:text-[#1DA1F2] transition-colors" />
                  <div>
                    <p className="text-black font-medium">Email</p>
                    <p className="text-black/60 text-sm">kishoyianbrianmwangi@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
