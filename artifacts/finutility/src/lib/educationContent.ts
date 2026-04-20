export interface EducationalContentCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface EducationalContentEntry {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: EducationalContentCard[];
}

export const homeEducationContent: EducationalContentEntry = {
  eyebrow: "Why this matters",
  heading: "Financial education helps users avoid expensive mistakes",
  intro:
    "A calculator can produce a number in seconds, but better financial decisions happen when users understand the concepts behind that number, the tradeoffs involved, and the risks of relying on assumptions they have never checked.",
  cards: [
    {
      title: "What Freetawn helps explain",
      description:
        "Freetawn pairs tools with context so users can learn how savings, debt, home buying, currency conversion, and crypto scenarios actually work before making a decision.",
      bullets: [
        "Interest rates change affordability, total cost, and opportunity cost over time.",
        "Timelines and monthly contributions can matter more than one headline number.",
        "Comparing multiple scenarios helps users spot realistic options instead of guessing.",
      ],
    },
    {
      title: "Problems users face without context",
      description:
        "People often focus on the monthly payment alone and miss the total cost, the effect of fees, or the long-term impact of delaying a savings plan or borrowing too aggressively.",
      bullets: [
        "A low payment can still hide years of extra interest and cash-flow pressure.",
        "Ignoring inflation, fees, and taxes can make a plan look safer than it really is.",
        "Confusion around core terms leads many users to avoid planning until a decision becomes urgent.",
      ],
    },
  ],
};

export const financeEducationContent: EducationalContentEntry = {
  eyebrow: "Finance basics",
  heading: "Core money concepts become easier when you see the math and the meaning together",
  intro:
    "Personal finance decisions are connected. Saving, borrowing, investing, and spending all compete for the same cash flow, which is why good tools should explain both the result and the reason behind it.",
  cards: [
    {
      title: "What users should understand first",
      description:
        "Before using any finance calculator, it helps to understand how growth rates, contribution size, debt costs, and time horizons work together.",
      bullets: [
        "Compound growth rewards early action and consistency more than perfect timing.",
        "Small rate changes can have a major effect when applied over many years.",
        "Emergency savings and debt strategy often shape how much someone can invest safely.",
      ],
    },
    {
      title: "What goes wrong without a plan",
      description:
        "Users who do not understand core finance concepts often under-save, over-borrow, or assume short-term affordability means long-term sustainability.",
      bullets: [
        "It becomes easy to underestimate how fast interest can help or hurt over time.",
        "People may chase a target amount without checking whether the monthly plan is realistic.",
        "Financial stress rises when decisions are made from guesswork instead of scenario testing.",
      ],
    },
  ],
};

export const cryptoEducationContent: EducationalContentEntry = {
  eyebrow: "Crypto education",
  heading: "Crypto tools work best when traders understand risk, fees, and realistic expectations",
  intro:
    "Crypto markets move fast, but disciplined decisions still depend on basic concepts: entry price, exit price, fees, break-even levels, and the risk of volatility changing a trade before emotions settle.",
  cards: [
    {
      title: "Concepts every trader should know",
      description:
        "A profitable trade is not just about price movement. It also depends on how much capital was committed, what fees were paid, and how much downside the trader can tolerate.",
      bullets: [
        "ROI helps compare trade performance across different position sizes.",
        "Break-even levels show the minimum price needed before a trade truly turns positive.",
        "Volatility can create large swings that punish traders who do not size positions carefully.",
      ],
    },
    {
      title: "Common mistakes beginners make",
      description:
        "Without a basic framework, many users focus only on upside and ignore slippage, taxes, exchange fees, and the psychological cost of chasing momentum.",
      bullets: [
        "Fees and spread can quietly erase what looked like a winning trade.",
        "Buying without a target or exit plan often turns volatility into panic decisions.",
        "Confusing speculation with long-term planning can expose users to more risk than they intended.",
      ],
    },
  ],
};

export const loansEducationContent: EducationalContentEntry = {
  eyebrow: "Borrowing basics",
  heading: "Loan education helps borrowers understand the payment, the payoff timeline, and the real total cost",
  intro:
    "Loans are often judged by the monthly payment first, but the true borrowing decision depends on interest, term length, fees, down payment size, and how much flexibility remains in the household budget afterward.",
  cards: [
    {
      title: "What borrowers should compare",
      description:
        "The most useful comparison is not just which loan feels affordable today, but which one stays manageable and costs less over the full term.",
      bullets: [
        "Shorter terms usually reduce total interest even when the monthly payment is higher.",
        "APR, taxes, insurance, and other costs can change the true payment materially.",
        "Extra principal payments can shorten the loan and reduce lifetime borrowing cost.",
      ],
    },
    {
      title: "Problems caused by loan confusion",
      description:
        "Users who do not understand amortization, escrow costs, or total interest can borrow more than they intended and still feel surprised by the long-term burden.",
      bullets: [
        "A longer term can look easier monthly while adding years of extra interest.",
        "Missing taxes, insurance, or PMI creates unrealistic housing expectations.",
        "Borrowers may delay repayment strategy and lose easy chances to save on interest.",
      ],
    },
  ],
};

export const compoundInterestEducationContent: EducationalContentEntry = {
  eyebrow: "Concept guide",
  heading: "Compound interest is powerful because growth starts earning growth",
  intro:
    "Many users know compounding is important, but they often underestimate how dramatically time, frequency, and steady contributions can change a future balance.",
  cards: [
    {
      title: "What this calculator teaches",
      description:
        "This tool shows how principal, return rate, contribution size, and time interact so users can see why long-term consistency matters so much.",
      bullets: [
        "Starting earlier can outweigh trying to contribute far more later.",
        "Recurring monthly additions accelerate growth because each new dollar gets time to compound.",
        "Comparing different rates helps users understand the cost of staying in low-yield accounts for too long.",
      ],
    },
    {
      title: "What happens when people misunderstand compounding",
      description:
        "Without context, users may delay investing, assume small contributions are pointless, or expect unrealistic returns without recognizing the time required.",
      bullets: [
        "Waiting a few years can reduce long-term growth far more than most people expect.",
        "Focusing only on rate and ignoring contribution habits leads to weaker planning.",
        "Confusing average returns with guaranteed outcomes can create false confidence.",
      ],
    },
  ],
};

export const mortgageEducationContent: EducationalContentEntry = {
  eyebrow: "Mortgage concepts",
  heading: "A mortgage payment is only one part of the home affordability picture",
  intro:
    "Home buyers often center the conversation on principal and interest, but real affordability also depends on taxes, insurance, HOA costs, cash reserves, maintenance, and how stable the monthly budget remains after closing.",
  cards: [
    {
      title: "What to understand before buying",
      description:
        "Mortgage planning becomes clearer when users see how down payment size, rate changes, and term length affect both cash flow and lifetime cost.",
      bullets: [
        "A lower rate can save tens of thousands of dollars over the life of the loan.",
        "A larger down payment may improve approval odds and reduce monthly strain.",
        "Escrow items can make the real payment higher than the headline mortgage quote.",
      ],
    },
    {
      title: "Problems buyers face without mortgage literacy",
      description:
        "Without a full understanding of mortgage structure, buyers can target homes based on a narrow payment estimate and overlook the long-term ownership burden.",
      bullets: [
        "Unexpected taxes or insurance increases can upset a previously comfortable budget.",
        "Choosing the maximum approved amount may leave too little room for maintenance or emergencies.",
        "Missing the tradeoff between 15-year and 30-year loans can create either payment stress or excess interest.",
      ],
    },
  ],
};

export const loanPaymentEducationContent: EducationalContentEntry = {
  eyebrow: "Loan fundamentals",
  heading: "Loan payments make more sense when users can see principal, interest, and term tradeoffs together",
  intro:
    "Whether the loan is personal, auto, or student-related, the payment formula is only the starting point. Better decisions come from understanding how interest accumulates and how the repayment term changes the total cost.",
  cards: [
    {
      title: "How to read a loan result",
      description:
        "The monthly payment helps with budget planning, but the total interest and total repayment show whether the structure is efficient over time.",
      bullets: [
        "Longer terms reduce the payment but usually increase total interest materially.",
        "Higher rates change both affordability and the speed of principal reduction.",
        "Early extra payments often save more interest than many borrowers realize.",
      ],
    },
    {
      title: "Why people get trapped by loan math",
      description:
        "Borrowers who only compare monthly payments can accept loans that seem manageable at first but cost far more over the life of the debt.",
      bullets: [
        "A cheaper monthly figure can hide a much more expensive total repayment.",
        "Ignoring APR and fees creates an incomplete picture of what a lender is charging.",
        "Without a payoff plan, debt can stay around longer than originally intended.",
      ],
    },
  ],
};

export const cryptoProfitEducationContent: EducationalContentEntry = {
  eyebrow: "Trade education",
  heading: "Crypto profit is more than price appreciation on a chart",
  intro:
    "True trade performance depends on entry cost, exit value, quantity, fees, and the discipline to compare outcome scenarios before the market forces a fast decision.",
  cards: [
    {
      title: "What this tool helps users understand",
      description:
        "The calculator turns a trade idea into actual numbers so users can compare gross gains, net profit, ROI, and break-even levels in one place.",
      bullets: [
        "Break-even price tells users the exact line between profit and loss after costs.",
        "ROI helps normalize results across trades of different sizes.",
        "Fee awareness matters because even small charges can add up across active trading.",
      ],
    },
    {
      title: "What goes wrong without profit discipline",
      description:
        "When traders skip the math, they often make emotional decisions based on price headlines instead of actual portfolio impact.",
      bullets: [
        "A trade that looks successful in percentage terms may still deliver weak net profit after fees.",
        "Without a break-even level, it is harder to set rational exits and protect capital.",
        "Users can confuse temporary price momentum with a well-planned risk-adjusted trade.",
      ],
    },
  ],
};

export const currencyEducationContent: EducationalContentEntry = {
  eyebrow: "Exchange-rate basics",
  heading: "Currency conversion is easier to trust when users understand rates, spread, and fees",
  intro:
    "A quoted exchange rate is useful, but the real-world amount someone receives also depends on provider markups, timing, transfer fees, and how currencies move in response to economic conditions.",
  cards: [
    {
      title: "What the exchange result means",
      description:
        "This tool helps users see the relationship between a base amount, the exchange rate, and the converted value so international decisions become easier to compare.",
      bullets: [
        "Mid-market rates provide a clean reference point for understanding fair value.",
        "Converting larger sums makes small markup differences more important.",
        "Exchange-rate moves are often linked to inflation, interest rates, and global risk sentiment.",
      ],
    },
    {
      title: "Common mistakes in currency planning",
      description:
        "Without a basic understanding of spread and fees, users may overestimate what they will receive and choose providers based on convenience rather than cost.",
      bullets: [
        "Airport and last-minute exchanges often produce worse outcomes than expected.",
        "A provider can advertise low fees while offering a weaker exchange rate.",
        "Ignoring volatility creates budgeting problems for travel, remote work, or international payments.",
      ],
    },
  ],
};

export const savingsGoalEducationContent: EducationalContentEntry = {
  eyebrow: "Savings strategy",
  heading: "Savings goals become more realistic when users understand pace, yield, and tradeoffs",
  intro:
    "A target amount alone does not create a plan. Reaching a goal depends on contribution size, timeline, starting balance, expected yield, and whether the monthly requirement still fits daily life.",
  cards: [
    {
      title: "What this calculator helps clarify",
      description:
        "Users can work backward from a goal or forward from a monthly savings amount to see how realistic the plan is before committing to it.",
      bullets: [
        "A longer timeline can reduce monthly pressure and make a goal more sustainable.",
        "Yield can shorten the journey, especially when contributions stay consistent.",
        "Seeing both time-to-goal and required monthly savings helps users choose a workable path.",
      ],
    },
    {
      title: "Why savings goals often fail",
      description:
        "Many goals break down because the target is emotionally motivating but the monthly plan is disconnected from income, debt, or emergency needs.",
      bullets: [
        "Unrealistic monthly contributions can cause people to quit after a few months.",
        "Keeping all savings in low-yield accounts may delay progress unnecessarily.",
        "Ignoring competing goals like debt payoff or housing costs leads to constant plan changes.",
      ],
    },
  ],
};

export const contactEducationContent: EducationalContentEntry = {
  eyebrow: "Support and trust",
  heading: "Clear support matters when users are making important money decisions",
  intro:
    "Financial tools are most helpful when users can ask questions, report unclear wording, and flag anything that could affect how they interpret a result. Contact information helps turn a calculator site into a more trustworthy learning platform.",
  cards: [
    {
      title: "Why users reach out",
      description:
        "Questions often come up when someone is comparing large financial choices such as borrowing, saving, investing, or evaluating a trade with several moving parts.",
      bullets: [
        "Users may want clarification on assumptions, fees, or how a result was calculated.",
        "Feedback helps improve guides, FAQs, and explanations for future visitors.",
        "Partnership, correction, and support requests all help keep Freetawn useful and credible.",
      ],
    },
    {
      title: "How better communication helps",
      description:
        "When users can contact the site easily, they are more likely to verify details, slow down before acting on a number, and treat the tools as part of a learning process rather than a final answer.",
      bullets: [
        "Good support encourages users to double-check assumptions before making major commitments.",
        "Clear communication helps surface missing topics and confusing areas quickly.",
        "Trust grows when educational tools feel transparent, reachable, and open to improvement.",
      ],
    },
  ],
};

export const guidesEducationContent: EducationalContentEntry = {
  eyebrow: "Learning before acting",
  heading: "Financial guides are most useful when they connect the concept to a real decision",
  intro:
    "A good guide should do more than define a term. It should help readers understand why the concept matters, how it affects a real-world choice, and what risks appear when the math is misunderstood or ignored.",
  cards: [
    {
      title: "What the guides are designed to do",
      description:
        "Freetawn guides are written to make technical finance topics easier to understand without stripping away the context that helps users make smarter decisions.",
      bullets: [
        "Each guide pairs a plain-English explanation with a relevant calculator or tool.",
        "Topics focus on practical decisions such as borrowing, saving, investing, and evaluating tradeoffs.",
        "Readers can move from theory to their own numbers without leaving the learning flow.",
      ],
    },
    {
      title: "Why financial literacy changes outcomes",
      description:
        "People often make expensive mistakes when they understand a label or headline but not the mechanism underneath it, such as how interest compounds, how loan amortization shifts over time, or how exchange-rate costs really work.",
      bullets: [
        "Education reduces guesswork and helps users compare scenarios with more confidence.",
        "Understanding assumptions makes it easier to spot unrealistic promises or weak plans.",
        "Conceptual clarity helps readers ask better questions before making a major commitment.",
      ],
    },
  ],
};

export const newsEducationContent: EducationalContentEntry = {
  eyebrow: "Reading markets well",
  heading: "Market news is more helpful when readers understand context, not just headlines",
  intro:
    "Financial headlines move fast, but better decisions usually come from understanding why a story matters, what indicators connect to it, and where sensational framing can create more heat than signal.",
  cards: [
    {
      title: "How to use a market news page well",
      description:
        "Readers get more value from market coverage when they treat headlines as starting points for understanding trends, risk, and economic context rather than standalone instructions to act immediately.",
      bullets: [
        "Cross-category reading helps connect rates, equities, crypto, and personal finance effects.",
        "Repeated themes across sources often matter more than one dramatic headline.",
        "Market stories become more useful when paired with tools that explain cost, return, or affordability.",
      ],
    },
    {
      title: "Why context protects users",
      description:
        "Without context, readers can misread volatility, overreact to single-day moves, or confuse third-party commentary with tailored financial advice.",
      bullets: [
        "Short-term noise can look more important than longer-term structural changes.",
        "Readers may mistake reporting on an asset for endorsement of that asset.",
        "Clear educational framing helps users pause, verify, and think before acting.",
      ],
    },
  ],
};