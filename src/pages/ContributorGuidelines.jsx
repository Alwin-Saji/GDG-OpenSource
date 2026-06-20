import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ContributorGuidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-28 md:pt-40 pb-20 md:pb-32 selection:bg-gray-100 selection:text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-12 md:mb-20"
        >
          <h1 className="text-4xl font-doto sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Contributor Guidelines.
          </h1>
          <p className="text-lg md:text-xl text-[#E8D98A] max-w-xl leading-relaxed">
            Everything you need to know to start contributing high-quality code to our ecosystem.
          </p>
        </motion.div>

        <div className="flex justify-end mb-4">
          <a
            href="/Contributor_Handbook .pdf"
            download
            className="px-6 py-3 bg-[#E8D98A] text-[#300000] font-bold rounded-full shadow-[0_4px_0_#DAA520] hover:shadow-[0_2px_0_#bdae5b] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all duration-150 text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Handbook</span>
          </a>
        </div>

        <div className="space-y-16 md:space-y-24">
          
          {/* Getting Started */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] transition-transform duration-300 group-hover:scale-150" />
                Getting Started
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Step 1 — Set Up Git and GitHub</h3>
                  <div>
                    <p className="mb-4">Before anything else, make sure you have:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>a GitHub account at github.com</li>
                      <li>Git installed on your machine</li>
                      <li>a code editor such as VS Code</li>
                    </ul>
                    <p className="mt-4">If you are new to GitHub, take 30 minutes to explore how repositories, issues, and pull requests work. That context will make everything else easier.</p>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Step 2 — Explore Available Projects</h3>
                  <div>
                    <p className="mb-4">Browse the list of participating projects shared by the organizers. Look for:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>projects that match your tech stack or interest area</li>
                      <li>repositories with beginner-friendly labels</li>
                      <li>projects with good README and setup documentation</li>
                    </ul>
                    <p className="mt-4">You are not limited to one project. You can contribute to multiple repositories throughout the event.</p>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Step 3 — Fork and Clone</h3>
                  <div>
                    <p className="mb-4">Once you have chosen a project:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Fork the repository to your own GitHub account</li>
                      <li>Clone your fork locally using git clone</li>
                      <li>Add the original repository as an upstream remote</li>
                      <li>Follow the setup instructions in the README</li>
                      <li>Make sure the project runs correctly on your machine before starting any work</li>
                    </ol>
                    <p className="mt-4 font-semibold text-yellow-400">Never work directly on the main branch of your fork. Always create a new branch for each contribution.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>


          {/* Contribution Workflow */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335] transition-transform duration-300 group-hover:scale-150" />
                Contribution Workflow
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div>
                  <p className="mb-4">Follow these steps for every contribution you make:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Browse open issues in the repository</li>
                    <li>Read the issue description carefully</li>
                    <li>Comment on the issue to request assignment — do not start work before being assigned</li>
                    <li>Wait for the maintainer to assign the issue to you</li>
                    <li>Create a new branch using the correct naming format</li>
                    <li>Work on the issue in your branch</li>
                    <li>Commit your changes with clear commit messages</li>
                    <li>Push your branch to your fork</li>
                    <li>Open a pull request and link it to the issue</li>
                    <li>Respond to any review feedback from the maintainer</li>
                    <li>Wait for your PR to be reviewed and merged</li>
                  </ol>
                  
                  <h4 className="text-lg font-semibold mt-8 mb-3 text-blue-300">Branch Naming Format</h4>
                  <p className="mb-3">Use the format specified in the project's CONTRIBUTING.md. A common format is:</p>
                  <code className="block bg-gray-800 border border-gray-700 px-4 py-2 rounded text-sm text-green-300 font-mono mb-3">type/short-description</code>
                  <p className="mb-2">Examples:</p>
                  <ul className="list-disc pl-5 space-y-1 font-mono text-sm text-gray-300">
                    <li>feat/add-dark-mode</li>
                    <li>fix/navbar-overflow</li>
                    <li>docs/update-readme</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-8 mb-3 text-blue-300">Commit Message Format</h4>
                  <p className="mb-3">Write commit messages that clearly describe what you did. A common convention:</p>
                  <code className="block bg-gray-800 border border-gray-700 px-4 py-2 rounded text-sm text-green-300 font-mono mb-3">type: short summary of change</code>
                  <p className="mb-2">Examples:</p>
                  <ul className="list-disc pl-5 space-y-1 font-mono text-sm text-gray-300">
                    <li>feat: add dark mode toggle to navbar</li>
                    <li>fix: resolve overflow on mobile nav</li>
                    <li>docs: update installation steps in README</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Understanding Issues */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC04] transition-transform duration-300 group-hover:scale-150" />
                Understanding Issues
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">How to Read an Issue</h3>
                  <div>
                    <p className="mb-4">A well-written issue will contain:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>a clear title describing the task</li>
                      <li>a description of the current problem or feature request</li>
                      <li>the expected behavior or outcome</li>
                      <li>relevant files or components to look at</li>
                      <li>acceptance criteria — what 'done' looks like</li>
                      <li>a difficulty label</li>
                    </ul>
                    <p className="mt-4">Read the entire issue before commenting. If anything is unclear, ask a specific question in the comments.</p>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Difficulty Labels</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-700 text-sm">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="border border-gray-700 px-4 py-2 text-left">Label</th>
                          <th className="border border-gray-700 px-4 py-2 text-left">What It Means</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2 font-semibold text-green-400">Beginner</td>
                          <td className="border border-gray-700 px-4 py-2">Minimal project understanding required. Good for first-timers.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2 font-semibold text-blue-400">Easy</td>
                          <td className="border border-gray-700 px-4 py-2">Basic understanding required. Small features or simple fixes.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2 font-semibold text-yellow-400">Medium</td>
                          <td className="border border-gray-700 px-4 py-2">Requires understanding of the project structure and logic.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2 font-semibold text-red-400">Hard</td>
                          <td className="border border-gray-700 px-4 py-2">Requires deep architectural understanding. Advanced work.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Issue Assignment Rules</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Always comment on an issue to request assignment before starting work</li>
                    <li>Do not work on issues that are already assigned to someone else</li>
                    <li>You can hold one active issue at a time initially</li>
                    <li>If you cannot complete an issue, comment and let the maintainer know so it can be reassigned</li>
                    <li>Inactivity for 24-48 hours may result in the issue being reassigned</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Pull Requests */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] transition-transform duration-300 group-hover:scale-150" />
                Pull Requests
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Before Raising a PR</h3>
                  <div>
                    <p className="mb-4">Make sure you have:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>tested your changes locally and confirmed they work</li>
                      <li>followed the coding conventions of the project</li>
                      <li>not included unrelated changes in your PR</li>
                      <li>synced your branch with the latest upstream changes</li>
                      <li>reviewed your own diff before submitting</li>
                    </ul>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Writing a Good PR Description</h3>
                  <div>
                    <p className="mb-4">Your PR should clearly communicate what you did and why. Use the PR template if one is provided. At minimum include:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>the issue number your PR resolves (use 'Closes #issue-number')</li>
                      <li>a summary of changes made</li>
                      <li>screenshots or recordings if the change is visual</li>
                      <li>a description of how you tested the changes</li>
                    </ul>
                    
                    <h4 className="text-base font-semibold mt-6 mb-2 text-green-400">GOOD PR Title Examples</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm font-mono text-gray-300">
                      <li>feat: add responsive dark mode toggle — closes #42</li>
                      <li>fix: resolve navbar overflow on mobile screens — closes #17</li>
                      <li>docs: add environment variable setup to README — closes #8</li>
                    </ul>

                    <h4 className="text-base font-semibold mt-6 mb-2 text-red-400">BAD PR Title Examples</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm font-mono text-gray-300">
                      <li>fixed stuff</li>
                      <li>changes</li>
                      <li>update</li>
                    </ul>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Keep PRs Focused</h3>
                  <div>
                    <p className="mb-4">Each pull request should address exactly one issue. Do not:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>bundle multiple unrelated fixes into one PR</li>
                      <li>make sweeping formatting changes across files you did not touch</li>
                      <li>refactor code outside the scope of your issue</li>
                      <li>include debug code, console logs, or commented-out blocks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Handling Code Review */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA] transition-transform duration-300 group-hover:scale-150" />
                Handling Code Review
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">What to Expect</h3>
                  <div>
                    <p className="mb-4">After you raise a PR, the maintainer will review your code. They may:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>approve and merge your PR</li>
                      <li>request changes with specific feedback</li>
                      <li>ask questions about your implementation</li>
                      <li>suggest a different approach</li>
                    </ul>
                    <p className="mt-4">This is a normal and healthy part of software development. Code review is not criticism of you as a person. It is feedback on the code.</p>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">How to Respond to Feedback</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Read all comments before making changes</li>
                    <li>Ask for clarification if a comment is unclear</li>
                    <li>Make the requested changes in your existing branch</li>
                    <li>Push your updates and the PR will automatically update</li>
                    <li>Reply to each comment to let the reviewer know it has been addressed</li>
                    <li>Do not open a new PR for the same issue</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Review Response Examples</h3>
                  <div>
                    <h4 className="text-base font-semibold mb-3 text-green-400">Good Responses to Review Feedback</h4>
                    <div className="bg-gray-800 border border-gray-700 rounded p-4 mb-4 text-sm">
                      <p className="mb-2"><span className="font-semibold text-blue-300">Maintainer:</span> "Please make this component responsive for smaller screens."</p>
                      <p><span className="font-semibold text-green-300">You:</span> "Done! Added media queries for screens below 768px. Please take another look."</p>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 rounded p-4 mb-6 text-sm">
                      <p className="mb-2"><span className="font-semibold text-blue-300">Maintainer:</span> "Can you explain why you used this approach here?"</p>
                      <p><span className="font-semibold text-green-300">You:</span> "I used useEffect here because the data fetch needs to run after render. Happy to switch to a different approach if preferred."</p>
                    </div>

                    <h4 className="text-base font-semibold mb-3 text-red-400">Poor Responses to Review Feedback</h4>
                    <div className="bg-gray-800 border border-gray-700 rounded p-4 mb-4 text-sm">
                      <p className="mb-2"><span className="font-semibold text-blue-300">Maintainer:</span> "Please improve variable naming."</p>
                      <p><span className="font-semibold text-red-300">You:</span> "ok" (and nothing changes)</p>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 rounded p-4 text-sm">
                      <p className="mb-2"><span className="font-semibold text-blue-300">Maintainer:</span> "This has a bug on edge cases."</p>
                      <p><span className="font-semibold text-red-300">You:</span> (opens a new PR instead of fixing the existing one)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Code Quality Standards */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] transition-transform duration-300 group-hover:scale-150" />
                Code Quality Standards
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">What Maintainers Expect</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>code that actually solves the issue</li>
                    <li>readable variable and function names</li>
                    <li>consistent formatting matching the project style</li>
                    <li>no unrelated modifications to other files</li>
                    <li>no broken existing functionality</li>
                    <li>no console.log or debug artifacts left behind</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">AI-Assisted Code</h3>
                  <div>
                    <p className="mb-4">AI tools may be allowed depending on the event policy. However:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>you must understand every line of code you submit</li>
                      <li>maintainers may ask you to explain your implementation</li>
                      <li>blindly pasting generated code without understanding it is not acceptable</li>
                      <li>if you used AI assistance, make sure the output is correct and fits the project</li>
                    </ul>
                    <p className="mt-4 font-semibold text-yellow-400">The goal of this event is for you to learn. Submitting code you do not understand defeats that purpose.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Communication Guidelines */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] transition-transform duration-300 group-hover:scale-150" />
                Communication Guidelines
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">How to Ask Good Questions</h3>
                  <div>
                    <p className="mb-4">When asking a maintainer for help or clarification:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>be specific about what you tried and what happened</li>
                      <li>share relevant error messages or screenshots</li>
                      <li>mention which file or line number you are looking at</li>
                      <li>ask in the issue comments or the designated channel, not in DMs</li>
                    </ul>
                    
                    <h4 className="text-base font-semibold mt-6 mb-2 text-green-400">Good Question Example</h4>
                    <div className="bg-gray-800 border border-gray-700 rounded p-4 text-sm mb-4">
                      <p>"I am trying to implement the dark mode toggle from issue #42. When I click the button, the state updates but the styles do not change. I have added the class toggle in App.js line 47 but the CSS is not applying. Could you point me toward where the theme variables are defined?"</p>
                    </div>

                    <h4 className="text-base font-semibold mb-2 text-red-400">Poor Question Example</h4>
                    <div className="bg-gray-800 border border-gray-700 rounded p-4 text-sm">
                      <p>"it's not working, help"</p>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">General Communication Etiquette</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>be respectful and professional in all interactions</li>
                    <li>be patient — maintainers are volunteers too</li>
                    <li>thank reviewers for their feedback</li>
                    <li>do not demand immediate responses</li>
                    <li>do not spam issues or PRs with unnecessary comments</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* What NOT to Do */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] transition-transform duration-300 group-hover:scale-150" />
                What NOT to Do
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Spam and Low-Quality Contributions</h3>
                  <div>
                    <p className="mb-4">The following will NOT be counted and may result in disqualification:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>meaningless whitespace or formatting-only changes</li>
                      <li>changing random colors or content with no purpose</li>
                      <li>unnecessary README edits just to get a PR</li>
                      <li>duplicate contributions already submitted by someone else</li>
                      <li>copying another contributor's code</li>
                      <li>submitting code you do not understand</li>
                      <li>working on an issue without being assigned</li>
                    </ul>
                    <p className="mt-4 font-semibold text-yellow-400">Maintainers are trained to identify and reject low-quality contributions. Quality always wins over quantity.</p>
                  </div>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Common Mistakes to Avoid</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-700 text-sm">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="border border-gray-700 px-4 py-2 text-left">Mistake</th>
                          <th className="border border-gray-700 px-4 py-2 text-left">What to Do Instead</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Starting work without assignment</td>
                          <td className="border border-gray-700 px-4 py-2">Comment and wait to be assigned first</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Submitting unrelated changes</td>
                          <td className="border border-gray-700 px-4 py-2">Keep PRs scoped to the issue only</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Ignoring review feedback</td>
                          <td className="border border-gray-700 px-4 py-2">Address every comment before re-requesting review</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Opening a new PR for the same issue</td>
                          <td className="border border-gray-700 px-4 py-2">Push fixes to the existing PR branch</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Vague PR descriptions</td>
                          <td className="border border-gray-700 px-4 py-2">Explain what, why, and how in your PR</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Working on main branch</td>
                          <td className="border border-gray-700 px-4 py-2">Always create a dedicated feature branch</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-700 px-4 py-2">Multiple issues at once (initially)</td>
                          <td className="border border-gray-700 px-4 py-2">Finish one issue before picking up another</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>


          {/* Contributor Checklist */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="border-t border-gray-100 pt-8 group"
          >
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-medium text-[#B8C7A8] tracking-tight flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] transition-transform duration-300 group-hover:scale-150" />
                Contributor Checklist
              </h2>
              
              <div className="text-gray-100 font-light text-sm md:text-base leading-relaxed space-y-8">
                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">Before You Start</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>GitHub account created</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Git installed and configured</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Repository forked and cloned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Project setup and running locally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>README and CONTRIBUTING.md read</span>
                    </li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-gray-700">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">For Every Contribution</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Issue read and understood</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Assignment requested and confirmed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>New branch created with correct naming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Changes tested locally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>PR description written clearly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Issue linked in PR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Screenshots added if visual change</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Review feedback addressed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

        </div>

      </div>
    </main>
  );
};

export default ContributorGuidelines;
