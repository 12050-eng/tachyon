import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Activity, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Play, 
  Check, 
  X, 
  MousePointer2, 
  Heart, 
  Watch, 
  Smartphone,
  Menu,
  ArrowRight,
  Star,
  Layers,
  Battery,
  Settings
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

const FadeIn = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-tachyon-dark text-white selection:bg-tachyon-red overflow-x-hidden">
      {/* Sticky Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-tachyon-red rounded-sm flex items-center justify-center transform rotate-45">
              <Zap className="w-5 h-5 text-white transform -rotate-45" />
            </div>
            <span className="font-orbitron text-2xl font-black tracking-tighter">TACHYON</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="#features" className="hover:text-tachyon-red transition-colors">Features</a>
            <a href="#specs" className="hover:text-tachyon-red transition-colors">Specs</a>
            <a href="#pricing" className="hover:text-tachyon-red transition-colors">Pricing</a>
          </div>

          <button className="bg-tachyon-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all glow-red hover:glow-red-strong active:scale-95">
            Reserve Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tachyon-red/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tachyon-red/10 border border-tachyon-red/20 text-tachyon-red text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tachyon-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tachyon-red"></span>
              </span>
              Next-Generation Smart Biometric Control
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Control at the <span className="text-tachyon-red text-glow-red">Speed</span> of Thought.
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              The world's first ergonomic smart mouse with integrated real-time biometric health tracking. Work faster, live healthier.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-tachyon-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all glow-red hover:glow-red-strong flex items-center gap-2 group">
                Reserve Your Tachyon
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                Watch the Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass border-white/10 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop" 
                alt="Tachyon Device" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tachyon-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Live Biometrics</span>
                  <Activity className="w-4 h-4 text-tachyon-red animate-pulse" />
                </div>
                <div className="flex items-end gap-4">
                  <div>
                    <div className="text-3xl font-orbitron font-bold">72</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">BPM Heart Rate</div>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div>
                    <div className="text-3xl font-orbitron font-bold">98%</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">SpO2 Level</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tachyon-red/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tachyon-red/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Trust Banner */}
        <div className="absolute bottom-0 left-0 right-0 py-10 border-t border-white/5 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap">TechCrunch</span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap">Wired</span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap">The Verge</span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap">HealthLine</span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap">Engadget</span>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                The <span className="text-gray-600">Old Way</span> is Killing Your Performance.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <X className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Repetitive Strain Injury (RSI)</h3>
                    <p className="text-gray-400 text-sm">Standard mice force your wrist into unnatural angles, leading to long-term nerve damage.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <X className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Zero Health Awareness</h3>
                    <p className="text-gray-400 text-sm">You spend 8+ hours at your desk with no idea how your body is reacting to stress and fatigue.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-tachyon-red/20 to-transparent border border-tachyon-red/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Zap className="w-12 h-12 text-tachyon-red opacity-20" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                  The <span className="text-tachyon-red">Tachyon</span> Evolution.
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 rounded-2xl bg-tachyon-red/10 border border-tachyon-red/20 glow-red">
                    <div className="w-12 h-12 rounded-full bg-tachyon-red flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Bio-Adaptive Ergonomics</h3>
                      <p className="text-gray-300 text-sm">Modular design that adjusts to your hand's unique anatomy, eliminating wrist strain instantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 rounded-2xl bg-tachyon-red/10 border border-tachyon-red/20 glow-red">
                    <div className="w-12 h-12 rounded-full bg-tachyon-red flex items-center justify-center shrink-0">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Real-Time Vitals</h3>
                      <p className="text-gray-300 text-sm">Integrated medical-grade sensors track your health while you work, alerting you to peak stress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bento Box Features */}
      <section id="features" className="py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black mb-6">Engineered for <span className="text-tachyon-red">Superiority</span>.</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Every component of Tachyon is designed to push the boundaries of what a peripheral can do.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1: Large */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 md:row-span-2 rounded-[2.5rem] glass border-white/10 p-10 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-tachyon-red/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-tachyon-red" />
                </div>
                <h3 className="text-4xl font-black mb-4">Biometric Monitoring</h3>
                <p className="text-gray-400 text-lg max-w-md">Medical-grade Heart Rate & SpO2 tracking with AI-driven health predictions. Know your limits before you reach them.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-20 group-hover:opacity-40 transition-opacity">
                <Activity className="w-full h-full text-tachyon-red animate-pulse" />
              </div>
            </motion.div>

            {/* Card 2: Medium */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="rounded-[2.5rem] glass border-white/10 p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-tachyon-red/20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Zap className="w-6 h-6 text-tachyon-red" />
                </div>
                <h3 className="text-2xl font-black mb-2">Zero-Latency</h3>
                <p className="text-gray-400 text-sm">Ultra-high 32,000 DPI sensors with 8,000Hz polling rate for instantaneous response.</p>
              </div>
              <div className="flex justify-end">
                <div className="text-4xl font-orbitron font-black text-white/10 group-hover:text-tachyon-red/20 transition-colors">0.1ms</div>
              </div>
            </motion.div>

            {/* Card 3: Medium */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="rounded-[2.5rem] glass border-white/10 p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-tachyon-red/20 flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
                  <MousePointer2 className="w-6 h-6 text-tachyon-red" />
                </div>
                <h3 className="text-2xl font-black mb-2">Smart Ergonomics</h3>
                <p className="text-gray-400 text-sm">Modular, hand-assembled design that prevents wrist strain and adapts to your grip style.</p>
              </div>
              <div className="flex justify-end">
                <div className="text-4xl font-orbitron font-black text-white/10 group-hover:text-tachyon-red/20 transition-colors">360°</div>
              </div>
            </motion.div>

            {/* Card 4: Small (Full width on mobile, spans 3 cols on md) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-3 rounded-[2.5rem] bg-gradient-to-r from-tachyon-red/20 to-tachyon-crimson/20 border border-tachyon-red/30 p-8 flex items-center justify-between group"
            >
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-tachyon-red flex items-center justify-center shrink-0 glow-red">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-1">Real-Time Haptic Alarms</h3>
                  <p className="text-gray-300">Wrist-worn haptic feedback for critical health alerts and peak performance notifications.</p>
                </div>
              </div>
              <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-tachyon-red transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">The <span className="text-tachyon-red">Ultimate</span> Hybrid.</h2>
            <p className="text-gray-400">Why settle for one when you can have everything?</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-gray-500">Features</th>
                  <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-gray-500">Standard Mouse</th>
                  <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-gray-500">Smart Watches</th>
                  <th className="py-6 px-4 text-sm font-bold uppercase tracking-widest text-tachyon-red">TACHYON</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-bold">Heart Rate/SpO2</td>
                  <td className="py-6 px-4 text-gray-500"><X className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-green-500"><Check className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-tachyon-red"><Check className="w-5 h-5" /></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-bold">AI Health Prediction</td>
                  <td className="py-6 px-4 text-gray-500"><X className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-gray-500">Limited</td>
                  <td className="py-6 px-4 text-tachyon-red"><Check className="w-5 h-5" /></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-bold">Advanced Gestures</td>
                  <td className="py-6 px-4 text-gray-500">Basic</td>
                  <td className="py-6 px-4 text-gray-500"><X className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-tachyon-red"><Check className="w-5 h-5" /></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-bold">Mouse DPI Functions</td>
                  <td className="py-6 px-4 text-green-500"><Check className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-gray-500"><X className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-tachyon-red"><Check className="w-5 h-5" /></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-bold">Real-time Alarms</td>
                  <td className="py-6 px-4 text-gray-500"><X className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-green-500"><Check className="w-5 h-5" /></td>
                  <td className="py-6 px-4 text-tachyon-red"><Check className="w-5 h-5" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Anatomy Section */}
      <section id="specs" className="py-32 bg-black/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">Anatomy of <span className="text-tachyon-red">Perfection</span>.</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center shrink-0 group-hover:bg-tachyon-red/20 transition-colors">
                    <Layers className="w-6 h-6 text-tachyon-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">OLED HUD Display</h3>
                    <p className="text-gray-400 text-sm">A crystal-clear mini display on the device showing live vitals, DPI settings, and notification alerts.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center shrink-0 group-hover:bg-tachyon-red/20 transition-colors">
                    <Settings className="w-6 h-6 text-tachyon-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ergonomic Finger-tip Sensors</h3>
                    <p className="text-gray-400 text-sm">Medical-grade sensors embedded directly into the primary buttons for continuous, non-intrusive tracking.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center shrink-0 group-hover:bg-tachyon-red/20 transition-colors">
                    <Battery className="w-6 h-6 text-tachyon-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hot-swappable Battery Dock</h3>
                    <p className="text-gray-400 text-sm">Never run out of power. Swap batteries in seconds with our magnetic quick-release system.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="relative">
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop" 
                  alt="Tachyon Anatomy" 
                  className="rounded-[3rem] shadow-2xl border border-white/10 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
                {/* Hotspots */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-tachyon-red rounded-full glow-red animate-ping"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-tachyon-red rounded-full glow-red animate-ping"></div>
                <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-tachyon-red rounded-full glow-red animate-ping"></div>
              </motion.div>
              <div className="absolute inset-0 bg-tachyon-red/5 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Trusted by the <span className="text-tachyon-red">Elite</span>.</h2>
            <p className="text-gray-400">Join thousands of early adopters who have already evolved.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex 'Viper' Chen",
                role: "Pro Gamer, Team Liquid",
                quote: "The zero-latency is real, but the health alerts are what keep me in the zone during 12-hour scrims. It's a game changer.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
              },
              {
                name: "Sarah Jenkins",
                role: "Senior Data Analyst",
                quote: "I used to have chronic wrist pain. Since switching to Tachyon, the pain is gone and I can track my focus levels through the app.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
              },
              {
                name: "Dr. Marcus Thorne",
                role: "Sports Medicine Specialist",
                quote: "Tachyon is the first device that successfully bridges the gap between high-performance input and medical-grade monitoring.",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 rounded-3xl glass border-white/10 relative h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-tachyon-red fill-current" />)}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-white/20" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Choose Your <span className="text-tachyon-red text-glow-red">Legacy</span>.</h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tachyon-red/10 border border-tachyon-red/20 text-tachyon-red text-xs font-bold uppercase tracking-[0.2em]">
              Limited Early Bird Batch: 42 Units Left
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-[2.5rem] glass border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-black mb-2">Standard Edition</h3>
                <div className="text-5xl font-orbitron font-black mb-6">$149</div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-tachyon-red" /> Tachyon Smart Device
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-tachyon-red" /> Basic Health Tracking
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-tachyon-red" /> 1 Year Warranty
                  </li>
                </ul>
              </div>
              <button className="w-full py-4 rounded-full border border-white/20 hover:bg-white/5 font-bold uppercase tracking-widest transition-all">
                Pre-Order Now
              </button>
            </motion.div>

            {/* Founder's */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-tachyon-red/20 to-tachyon-crimson/20 border-2 border-tachyon-red glow-red-strong flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 px-3 py-1 bg-tachyon-red text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                Most Popular
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2">Founder's Edition</h3>
                <div className="text-5xl font-orbitron font-black mb-6">$199</div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-tachyon-red" /> Tachyon Smart Device
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-tachyon-red" /> Smart Charging Dock
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-tachyon-red" /> Lifetime AI Software Access
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-tachyon-red" /> Exclusive Founder's Badge
                  </li>
                </ul>
              </div>
              <button className="w-full py-4 rounded-full bg-tachyon-red hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-all glow-red">
                Reserve Your Spot
              </button>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <ShieldCheck className="w-5 h-5" />
              Risk-Free 30-Day Money Back Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-tachyon-red rounded-sm flex items-center justify-center transform rotate-45">
                  <Zap className="w-5 h-5 text-white transform -rotate-45" />
                </div>
                <span className="font-orbitron text-2xl font-black tracking-tighter">TACHYON</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                Redefining the boundary between human and machine. Control at the speed of thought.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:bg-tachyon-red/20 transition-colors cursor-pointer">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:bg-tachyon-red/20 transition-colors cursor-pointer">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:bg-tachyon-red/20 transition-colors cursor-pointer">
                  <Watch className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Product</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xs text-gray-600 uppercase tracking-widest">
              © 2026 TACHYON LABS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-4">
              <input 
                type="email" 
                placeholder="JOIN THE EVOLUTION" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-xs font-bold tracking-widest focus:outline-none focus:border-tachyon-red transition-colors w-64"
              />
              <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-tachyon-red hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
