import { Download, Briefcase, Users, Target, Award, FileText, CheckCircle, TrendingUp, Sparkles, ArrowLeft, Zap, Shield, Layout, Eye } from 'lucide-react';
import { DownloadInstructionsButton } from './DownloadInstructionsButton';

interface CVStructurePageProps {
  prompt: {
    id: string;
    title: string;
    description: string;
  };
  onDownload: (id: string) => void;
  onDownloadInstructions?: (id: string) => void;
  onBack?: () => void;
}

export function CVStructurePage({ prompt, onDownload, onDownloadInstructions, onBack }: CVStructurePageProps) {
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
              AI CV Structural Engineer
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {prompt.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              An expert-level AI structural engineer exclusively for CVs and academic vitae—obsessing over architecture, not just content.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onDownload(prompt.id)}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#007BFF] font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Try CV Structure Architect Free
              </button>
              {onDownloadInstructions && (
                <DownloadInstructionsButton onClick={() => onDownloadInstructions(prompt.id)} />
              )}
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor">
            <path d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"></path>
          </svg>
        </div>
      </div>

      {/* What It Is Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#007BFF] to-[#0056b3] rounded-xl">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What the System Is
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                An expert-level AI structural engineer exclusively for CVs and academic vitae. Unlike most tools that focus on writing content, CV Structure Architect obsesses over <strong>architecture</strong>—using proprietary frameworks drawn from Ivy League career offices, global executive search firms, and latest ATS algorithms to guarantee maximum readability and impact from the first 7-second scan.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For Section */}
        <div className="bg-gradient-to-br from-[#007BFF]/5 to-[#28A745]/5 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#28A745] to-[#1e7a32] rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Who It's For
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: FileText, label: 'Graduate Students' },
                  { icon: Award, label: 'Postdoctoral Researchers' },
                  { icon: Target, label: 'Faculty Candidates' },
                  { icon: TrendingUp, label: 'Mid-to-Senior Professionals' },
                  { icon: Briefcase, label: 'Executives' },
                  { icon: Zap, label: 'Career Changers' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <item.icon className="w-5 h-5 text-[#007BFF]" />
                    <span className="font-semibold text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What Users Get Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-xl">
              <Award className="w-6 h-6 text-gray-900" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What Users Will Get
              </h2>
              <div className="space-y-4">
                {[
                  'Instant, tailored CV architectures for your target opportunity',
                  'Before/after structural outlines showing transformation',
                  'Section-by-section rationale and optimization strategy',
                  'ATS-readiness score with specific improvement actions',
                  'Export-ready templates formatted for maximum impact'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#28A745] flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How to Get Best Results Section */}
        <div className="bg-gradient-to-br from-[#28A745]/5 to-[#007BFF]/5 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#007BFF] to-[#28A745] rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                How to Get the Best Out of It
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#007BFF] text-white rounded-full text-sm">1</span>
                    Supply Complete Career Data
                  </h3>
                  <p className="text-gray-700">
                    Provide all your career information, even if it's messy or incomplete. The AI will structure it optimally.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#007BFF] text-white rounded-full text-sm">2</span>
                    State Your Target Opportunity
                  </h3>
                  <p className="text-gray-700">
                    Always specify the exact role, institution, or position you're targeting for maximum relevance.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#007BFF] text-white rounded-full text-sm">3</span>
                    Specify Context
                  </h3>
                  <p className="text-gray-700">
                    Mention preferred length (1-page, 2-page, academic CV) and cultural context (US, EU, Asia, etc.).
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#007BFF] text-white rounded-full text-sm">4</span>
                    Iterate with Feedback
                  </h3>
                  <p className="text-gray-700">
                    Feed back any recruiter or academic feedback to refine the structure continuously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes It Different Section */}
        <div className="bg-gradient-to-br from-[#007BFF] to-[#28A745] rounded-2xl p-8 md:p-12 mb-12 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What Makes It Different
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                While most tools focus on writing content, <strong>CV Structure Architect obsesses over architecture</strong>—the layout, hierarchy, section ordering, and visual flow that determines whether your CV gets read or discarded in 7 seconds.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold mb-4 text-xl">Proprietary Frameworks Include:</h3>
                <div className="space-y-3">
                  {[
                    'Ivy League career office structural guidelines',
                    'Global executive search firm best practices',
                    'Latest ATS algorithm optimization techniques',
                    '7-second scan pattern analysis',
                    'Cross-cultural CV architecture standards'
                  ].map((framework, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                      <p className="text-white/90">{framework}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-2 border-[#007BFF]/10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Architect Your Perfect CV?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your career data into a structurally optimized CV that wins in the first 7 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onDownload(prompt.id)}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#28A745] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Try CV Structure Architect Free
            </button>
            {onDownloadInstructions && (
              <DownloadInstructionsButton onClick={() => onDownloadInstructions(prompt.id)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
