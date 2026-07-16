import { useState, useCallback, useRef, useEffect, memo } from 'react';
import { PERSONAL_INFO, SKILLS } from '../../constants/data';

type Tab = 'bio.ts' | 'skills.json' | 'terminal.sh';

interface CommandOutput {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

const TERMINAL_PRESETS = [
  { cmd: 'help', desc: 'List available commands' },
  { cmd: 'about', desc: 'Display short bio info' },
  { cmd: 'contact', desc: 'Show contact details' },
  { cmd: 'clear', desc: 'Reset console logs' }
];

export const CodePlayground = memo(function CodePlayground() {
  const [activeTab, setActiveTab] = useState<Tab>('bio.ts');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<CommandOutput[]>([
    { text: 'Sudarshan OS [Version 7.4.19]', type: 'success' },
    { text: 'Type "help" or click presets below to execute queries.', type: 'output' }
  ]);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal history to bottom
  useEffect(() => {
    if (activeTab === 'terminal.sh' && consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, activeTab]);

  const executeCommand = useCallback((cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory: CommandOutput[] = [...terminalHistory, { text: `> ${cmdText}`, type: 'input' }];

    switch (trimmed) {
      case 'help':
        newHistory.push(
          { text: 'Available commands:', type: 'success' },
          { text: '  about      - Display developer bio overview', type: 'output' },
          { text: '  contact    - Print email, phone, and social handles', type: 'output' },
          { text: '  clear      - Clear the console terminal screen', type: 'output' },
          { text: '  skills     - List technical skill catalog', type: 'output' }
        );
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'about':
        newHistory.push({
          text: `Sudarshan Kankal: Senior Software Engineer at UBS. Specializes in migrating legacy systems to React 19, improving page speeds, and implementing robust frontend architecture with 7+ years of expertise.`,
          type: 'output'
        });
        break;
      case 'contact':
        newHistory.push(
          { text: 'Contact Information:', type: 'success' },
          { text: `  Email:    ${PERSONAL_INFO.email}`, type: 'output' },
          { text: `  Phone:    ${PERSONAL_INFO.phone}`, type: 'output' },
          { text: `  LinkedIn: ${PERSONAL_INFO.linkedinUrl}`, type: 'output' }
        );
        break;
      case 'skills':
        const topSkills = SKILLS.slice(0, 6).map(s => `${s.name} (${s.level}%)`).join(', ');
        newHistory.push({ text: `Top Skills: ${topSkills}...`, type: 'output' });
        break;
      default:
        newHistory.push({ text: `Command not found: "${cmdText}". Type "help" for a list of commands.`, type: 'error' });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  }, [terminalHistory]);

  const handleTerminalSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(terminalInput);
  }, [terminalInput, executeCommand]);

  return (
    <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#08080f]/90">
      {/* Code window tab bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-black/40 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3">
          {(['bio.ts', 'skills.json', 'terminal.sh'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-xs font-mono rounded-md border transition-all cursor-pointer ${
                activeTab === tab
                  ? 'text-accent-cyan bg-accent-cyan/[0.08] border-accent-cyan/20'
                  : 'text-text-muted border-transparent hover:text-text-secondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Code editor content display */}
      <div className="p-6 font-mono text-sm leading-[1.8] min-h-[300px] max-h-[400px] overflow-y-auto bg-black/20">
        {activeTab === 'bio.ts' && (
          <div>
            <p className="text-text-muted">{'// Sudarshan Kankal Object Definition'}</p>
            <p>
              <span className="text-accent-purple">import</span> {'{'} <span className="text-accent-cyan">Engineer</span> {'}'} <span className="text-accent-purple">from</span> <span className="text-accent-green">'./engineer-types'</span>;
            </p>
            <br />
            <p>
              <span className="text-accent-purple">const</span> <span className="text-accent-cyan">developer</span>: <span className="text-accent-blue">Engineer</span> = {'{'}
            </p>
            <p className="pl-6"><span className="text-accent-blue">name</span>: <span className="text-accent-green">"{PERSONAL_INFO.name}"</span>,</p>
            <p className="pl-6"><span className="text-accent-blue">experience</span>: <span className="text-accent-pink">{PERSONAL_INFO.yearsOfExperience}</span>,</p>
            <p className="pl-6"><span className="text-accent-blue">coreStack</span>: [<span className="text-accent-green">"React"</span>, <span className="text-accent-green">"TypeScript"</span>, <span className="text-accent-green">"Tailwind"</span>],</p>
            <p className="pl-6"><span className="text-accent-blue">currentEmployer</span>: <span className="text-accent-green">"{PERSONAL_INFO.company}"</span>,</p>
            <p className="pl-6"><span className="text-accent-blue">openForHiring</span>: <span className="text-accent-pink">true</span>,</p>
            <p className="pl-6"><span className="text-accent-blue">getSummary</span>: () =&gt; <span className="text-accent-green">"Passionate about robust code migrations & FCP speed."</span></p>
            <p>{'};'}</p>
          </div>
        )}

        {activeTab === 'skills.json' && (
          <div>
            <p className="text-text-muted">{'/* Core Skills Metrics */'}</p>
            <p>{'{'}</p>
            <p className="pl-6">
              <span className="text-accent-blue">"languages"</span>: [<span className="text-accent-green">"TypeScript"</span>, <span className="text-accent-green">"JavaScript"</span>, <span className="text-accent-green">"Python"</span>],
            </p>
            <p className="pl-6">
              <span className="text-accent-blue">"frontend"</span>: [<span className="text-accent-green">"React 19"</span>, <span className="text-accent-green">"Redux"</span>, <span className="text-accent-green">"Tailwind CSS"</span>],
            </p>
            <p className="pl-6">
              <span className="text-accent-blue">"testing"</span>: [<span className="text-accent-green">"Jest"</span>, <span className="text-accent-green">"Unit Testing"</span>],
            </p>
            <p className="pl-6">
              <span className="text-accent-blue">"standards"</span>: [<span className="text-accent-green">"Web Accessibility (WCAG)"</span>, <span className="text-accent-green">"PWAs"</span>]
            </p>
            <p>{'}'}</p>
          </div>
        )}

        {activeTab === 'terminal.sh' && (
          <div className="flex flex-col h-full justify-between">
            {/* Terminal commands output */}
            <div className="space-y-1 mb-4">
              {terminalHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={`text-xs ${
                    line.type === 'input'
                      ? 'text-accent-cyan'
                      : line.type === 'error'
                      ? 'text-[#ff5f57]'
                      : line.type === 'success'
                      ? 'text-accent-green'
                      : 'text-text-secondary'
                  }`}
                >
                  {line.text}
                </div>
              ))}
              <div ref={consoleBottomRef} />
            </div>

            {/* Input console form */}
            <form onSubmit={handleTerminalSubmit} className="flex gap-2 border-t border-white/5 pt-3">
              <span className="text-accent-cyan font-bold select-none">&gt;</span>
              <input
                type="text"
                className="flex-grow bg-transparent border-none outline-none text-xs text-text-primary placeholder-text-muted"
                placeholder="Type 'about', 'skills', 'contact'..."
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
              />
            </form>

            {/* Preset Action pills */}
            <div className="flex flex-wrap gap-1.5 mt-3 border-t border-white/5 pt-3">
              <span className="text-[10px] text-text-muted self-center font-mono mr-1">Presets:</span>
              {TERMINAL_PRESETS.map((p) => (
                <button
                  key={p.cmd}
                  onClick={() => executeCommand(p.cmd)}
                  className="px-2 py-0.5 text-[10px] font-mono border border-white/10 rounded-md bg-white/[0.02] text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all cursor-pointer"
                  title={p.desc}
                >
                  {p.cmd}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
