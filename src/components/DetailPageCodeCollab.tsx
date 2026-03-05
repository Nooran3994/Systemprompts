import { Download, Code, Users, Rocket, Lightbulb, Globe, CheckCircle, FileText, Shield, TrendingUp, Sparkles, ArrowLeft } from 'lucide-react';
import { DownloadInstructionsButton } from './DownloadInstructionsButton';

interface CodeCollabPageProps {
  prompt: {
    id: string;
    title: string;
    description: string;
  };
  onDownload: (id: string) => void;
  onDownloadInstructions?: (id: string) => void;
  onBack?: () => void;
}

export function CodeCollabPage({ prompt, onDownload, onDownloadInstructions, onBack }: CodeCollabPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#007BFF] via-[#0056b3] to-[#28A745] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {onBack && (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 group mb-8"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-semibold">Back to Browse</span>
            </button>
          )}
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Expert-Level AI Coaching
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {prompt.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              An expert-level AI coach that transforms the softest (and most career-defining) part of engineering — code collaboration — into a deliberate practice skill.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onDownload(prompt.id)}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#007BFF] rounded-xl font-bold text-base transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Try Free Now</span>
              </button>

              {onDownloadInstructions && (
                <DownloadInstructionsButton
                  onClick={() => onDownloadInstructions(prompt.id)}
                  className="w-full sm:w-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Who it's for */}
        <section className="mb-16 md:mb-20">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#343A40] mb-10 text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Who It's For
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="group p-6 md:p-7 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#007BFF] hover:shadow-lg transition-all duration-300">
              <Users className="w-10 h-10 text-[#007BFF] mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-gray-700 text-base leading-relaxed">
                Mid-to-senior engineers who want to level-up influence without authority
              </p>
            </div>

            <div className="group p-6 md:p-7 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#28A745] hover:shadow-lg transition-all duration-300">
              <Rocket className="w-10 h-10 text-[#28A745] mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-gray-700 text-base leading-relaxed">
                Tech leads & engineering managers building high-trust teams
              </p>
            </div>

            <div className="group p-6 md:p-7 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#FFC107] hover:shadow-lg transition-all duration-300">
              <Lightbulb className="w-10 h-10 text-[#FFC107] mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-gray-700 text-base leading-relaxed">
                New grads or bootcamp alumni struggling with "the human part" of reviews
              </p>
            </div>

            <div className="group p-6 md:p-7 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#6C757D] hover:shadow-lg transition-all duration-300">
              <Globe className="w-10 h-10 text-[#6C757D] mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-gray-700 text-base leading-relaxed">
                Distributed/global teams fighting miscommunication and review fatigue
              </p>
            </div>
          </div>
        </section>

        {/* What users will get */}
        <section className="mb-16 md:mb-20">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#343A40] mb-10 text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What You'll Get
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#007BFF] to-[#0056b3] rounded-xl flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Realistic, high-fidelity role-play scenarios
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#28A745] to-[#1e7e34] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Instant, rubric-based feedback on tone, clarity, and impact
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Ready-to-copy comment templates & escalation frameworks
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#6C757D] to-[#495057] rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Confidence to give hard feedback without damaging relationships
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#007BFF] to-[#0056b3] rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Measurable improvement in review velocity and team morale
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <button
              onClick={() => onDownload(prompt.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#007BFF] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0056b3] transform hover:scale-105 transition-all text-base font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Download className="w-5 h-5" />
              Try CodeCollab Coach Free
            </button>
            {onDownloadInstructions && (
              <DownloadInstructionsButton
                onClick={() => onDownloadInstructions(prompt.id)}
                className="w-full sm:w-auto"
              />
            )}
          </div>
        </section>

        {/* How to Get the Best Out of It */}
        <section className="mb-16 md:mb-20">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#343A40] mb-10 text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            How to Get the Best Out of It
          </h2>
          <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 md:p-10 border border-gray-200">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-bold text-base">
                  1
                </span>
                <div>
                  <strong className="text-[#343A40] text-base block mb-1.5">Paste real context</strong>
                  <p className="text-gray-600 text-sm leading-relaxed">Always paste real (anonymized) PR links or comment threads</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#28A745] text-white rounded-full flex items-center justify-center font-bold text-base">
                  2
                </span>
                <div>
                  <strong className="text-[#343A40] text-base block mb-1.5">Maintain continuity</strong>
                  <p className="text-gray-600 text-sm leading-relaxed">Use "Continue as [role]" to keep long role-plays alive</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#FFC107] text-white rounded-full flex items-center justify-center font-bold text-base">
                  3
                </span>
                <div>
                  <strong className="text-[#343A40] text-base block mb-1.5">Request feedback</strong>
                  <p className="text-gray-600 text-sm leading-relaxed">Ask for "before/after" rewrites and scorecards</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#6C757D] text-white rounded-full flex items-center justify-center font-bold text-base">
                  4
                </span>
                <div>
                  <strong className="text-[#343A40] text-base block mb-1.5">Export learnings</strong>
                  <p className="text-gray-600 text-sm leading-relaxed">End sessions with "Export my top 3 learnings + templates"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What makes it different */}
        <section className="mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#007BFF]/10 to-[#28A745]/10 p-10 md:p-12 rounded-2xl border-2 border-[#007BFF]/20">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#343A40] mb-6 text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              What Makes It Different
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Most AI coding assistants write code. CodeCollab Coach writes better engineers by mastering the 80% of impact that lives in comments, not commits.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#007BFF] to-[#28A745] rounded-2xl p-10 md:p-12 text-center">
          <Code className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 text-white" />
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to Master Code Collaboration?
          </h3>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Start transforming your code review skills and become the engineer who elevates entire teams through better collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onDownload(prompt.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#007BFF] rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-base font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Download className="w-5 h-5" />
              Try CodeCollab Coach Free
            </button>
            {onDownloadInstructions && (
              <DownloadInstructionsButton
                onClick={() => onDownloadInstructions(prompt.id)}
                className="w-full sm:w-auto"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
