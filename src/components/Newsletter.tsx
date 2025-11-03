import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="bg-[#FAAF1E] rounded-2xl p-12">
      <div className="max-w-2xl mx-auto text-center">
        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-[#111230] rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-[#FAAF1E]" />
            </div>
            <h3 className="text-2xl text-[#111230] mb-2">Thank you for subscribing!</h3>
            <p className="text-[#111230]/80">You'll receive our latest updates and insights.</p>
          </motion.div>
        ) : (
          <>
            <h3 className="text-3xl md:text-4xl text-[#111230] mb-4">
              Stay updated
            </h3>
            <p className="text-lg text-[#111230]/80 mb-8">
              Get the latest insights on hospitality technology and industry trends
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border-0 focus:ring-2 focus:ring-[#111230]"
              />
              <Button
                type="submit"
                className="bg-[#111230] hover:bg-[#111230]/90 text-white"
              >
                Subscribe
                <Send className="ml-2" size={16} />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
