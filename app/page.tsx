'use client'

import { useState } from 'react'

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0)

  const chapters = [
    {
      id: 'cover',
      title: 'Cover',
      content: (
        <div className="cover">
          <h1>The Menopause Survival Guide</h1>
          <p className="subtitle">Your Tour Through "The Change" with Humor, Holistic Wisdom & Hot Flash Hacks</p>
          <p style={{ fontSize: '1.2rem', marginTop: '30px' }}>🌸 Navigate the journey with grace, grit, and maybe some good wine 🌸</p>
          <p className="author">Your Personal Tour Guide to the Second Spring</p>
        </div>
      )
    },
    {
      id: 'intro',
      title: 'Introduction',
      content: (
        <div className="chapter">
          <h2>Chapter 1: Welcome to the Ride!</h2>

          <div className="tour-guide-box">
            Welcome aboard the Menopause Express! I'm your tour guide through this wild, wonderful, and occasionally sweaty journey. Think of me as your GPS through hormone highway – I've got the map, the snacks, and a sense of humor about the whole thing. Buckle up, buttercup!
          </div>

          <p>
            Let's get one thing straight: menopause is not a disease, a disaster, or a death sentence for your femininity.
            It's a natural biological transition that every woman experiences, and yes, it comes with some interesting
            plot twists. But here's the good news – you're not losing your mind, your identity, or your mojo. You're
            just upgrading to a new operating system.
          </p>

          <p>
            Think of menopause as your body's way of saying, "Hey, remember all those years of monthly drama? Yeah,
            we're done with that. But before we completely close up shop, let's throw one last wild party." And by
            party, I mean hot flashes, mood swings, and the occasional urge to cry at pet food commercials.
          </p>

          <h3>What You'll Find in This Guide</h3>

          <p>This isn't your grandmother's menopause manual (though grandma probably could have used one too). We're diving into:</p>

          <ul>
            <li><strong>Understanding the Changes:</strong> What's actually happening in your body (spoiler: it's not just "getting old")</li>
            <li><strong>Holistic Nutrition:</strong> Foods that are your new best friends and ones that are secretly plotting against you</li>
            <li><strong>Natural Remedies:</strong> From herbs to lifestyle changes that actually work</li>
            <li><strong>Relationship Navigation:</strong> Keeping the spark alive when you'd rather keep a fan on</li>
            <li><strong>Intimacy Reimagined:</strong> Yes, sex after 50 is a thing – and it can be amazing!</li>
          </ul>

          <div className="tip-box">
            The average age for menopause is 51, but perimenopause (the warm-up act) can start in your 40s or even late 30s.
            This transition typically lasts 4-8 years, but hey, we're all unique snowflakes with our own timeline!
          </div>

          <p>
            Throughout this guide, I'll be popping in with observations, terrible jokes, and real talk. Because if we
            can't laugh about waking up in a puddle of our own sweat at 3 AM, what can we laugh about?
          </p>
        </div>
      )
    },
    {
      id: 'understanding',
      title: 'Understanding',
      content: (
        <div className="chapter">
          <h2>Chapter 2: What's Actually Happening Here?</h2>

          <div className="tour-guide-box">
            Picture your ovaries as two employees who've been working overtime for 30+ years. Now they're ready to retire,
            but instead of a smooth transition with a nice gold watch, they're going out with drama, unpredictability,
            and some serious mood swings. Welcome to the corporate downsizing happening in your reproductive system!
          </div>

          <h3>The Three Acts of The Change</h3>

          <h4>Act 1: Perimenopause (The Preview)</h4>
          <p>
            This is when your ovaries start practicing for retirement. Your periods might show up late, early, heavy,
            light, or sometimes they just ghost you entirely. You might experience:
          </p>
          <ul>
            <li>Irregular periods (your calendar is now just a suggestion)</li>
            <li>Hot flashes making surprise appearances</li>
            <li>Sleep disturbances (hello, 3 AM ceiling staring)</li>
            <li>Mood swings that would make a teenager jealous</li>
            <li>Brain fog (wait, what was I saying?)</li>
          </ul>

          <h4>Act 2: Menopause (The Main Event)</h4>
          <p>
            Officially, menopause is diagnosed after 12 consecutive months without a period. That's it. One year of freedom
            from tampons, pads, and period underwear. But the symptoms? They might stick around for the encore.
          </p>

          <h4>Act 3: Postmenopause (The New Normal)</h4>
          <p>
            Everything after that 12-month mark. For many women, symptoms ease up. For others, it's about adapting to your
            body's new normal and maintaining long-term health.
          </p>

          <h3>The Hormone Headliners</h3>

          <h4>Estrogen: The Diva</h4>
          <p>
            She's been running the show for decades, and now she's on a farewell tour with very unpredictable performances.
            Some days she shows up strong, other days she's a no-show. This inconsistency is what causes many symptoms.
          </p>

          <h4>Progesterone: The Peacekeeper</h4>
          <p>
            This hormone usually balances out estrogen's drama. But as you approach menopause, progesterone drops first,
            leaving estrogen to run wild like a toddler without a nap.
          </p>

          <h4>Testosterone: The Unexpected Player</h4>
          <p>
            Yes, women have testosterone too! And as it declines, you might notice changes in libido, energy, and muscle mass.
            But don't worry – we'll talk about bringing sexy back in the relationships chapter.
          </p>

          <div className="tip-box">
            <strong>Myth Buster:</strong> You can't get pregnant during perimenopause? WRONG! Until you've hit that 12-month
            mark, your ovaries might still surprise you with the occasional egg. Use protection unless you want to explain to
            your teenager why they're getting a sibling.
          </div>

          <h3>Common Symptoms (AKA The Greatest Hits)</h3>

          <ul>
            <li><strong>Hot Flashes:</strong> Sudden waves of heat that make you want to live in a freezer</li>
            <li><strong>Night Sweats:</strong> Hot flashes' evil twin who only visits at bedtime</li>
            <li><strong>Vaginal Dryness:</strong> Not fun for anyone involved (we'll fix this, I promise)</li>
            <li><strong>Weight Gain:</strong> Especially around the middle (thanks, changing metabolism)</li>
            <li><strong>Insomnia:</strong> Sleep becomes as elusive as your car keys</li>
            <li><strong>Mood Changes:</strong> From rage to tears in 60 seconds flat</li>
            <li><strong>Decreased Libido:</strong> Your sex drive took a vacation without telling you</li>
            <li><strong>Joint Pain:</strong> Suddenly you sound like a bowl of Rice Krispies when you stand up</li>
          </ul>

          <div className="tour-guide-box">
            Here's what they don't tell you: not every woman gets every symptom. Some women breeze through with barely a
            hot flash. Others get the full experience. It's like a symptom lottery, and nobody knows what numbers they're
            getting until they show up. The key is having a toolkit ready for whatever comes your way.
          </div>
        </div>
      )
    },
    {
      id: 'nutrition',
      title: 'Nutrition',
      content: (
        <div className="chapter">
          <h2>Chapter 3: Eating Your Way Through The Change</h2>

          <div className="tour-guide-box">
            Listen, I'm not going to tell you to eat kale three times a day and give up everything you love. But I am
            going to tell you that what you eat can make the difference between riding the menopause wave like a surfer
            or getting pummeled by it like a tourist who can't swim. Choose wisely, my friend.
          </div>

          <h3>Foods That Are Your New BFFs</h3>

          <h4>1. Phytoestrogen Power Players</h4>
          <p>
            These plant-based compounds mimic estrogen in your body (the gentle, helpful kind, not the dramatic kind).
            They can help balance those declining hormone levels.
          </p>
          <ul>
            <li><strong>Soy Products:</strong> Tofu, tempeh, edamame, miso (yes, even in your fancy restaurant)</li>
            <li><strong>Flaxseeds:</strong> Grind them fresh and sprinkle on everything – yogurt, oatmeal, salads</li>
            <li><strong>Chickpeas:</strong> Hummus is now a health food. You're welcome.</li>
            <li><strong>Lentils:</strong> The unsung heroes of hormone balance</li>
          </ul>

          <div className="recipe-box">
            <h4>Morning Hormone-Happy Smoothie</h4>
            <ul>
              <li>1 cup unsweetened soy milk</li>
              <li>1 tablespoon ground flaxseed</li>
              <li>1/2 cup frozen berries</li>
              <li>1 tablespoon almond butter</li>
              <li>1 handful spinach (you won't taste it, trust me)</li>
              <li>1/2 frozen banana</li>
            </ul>
            <p>Blend and pretend you're at a fancy juice bar, not your kitchen in your bathrobe.</p>
          </div>

          <h4>2. Calcium & Vitamin D Dream Team</h4>
          <p>
            Estrogen decline affects bone density. These nutrients are your skeleton's bodyguards.
          </p>
          <ul>
            <li><strong>Leafy Greens:</strong> Kale, collards, bok choy (make friends with them)</li>
            <li><strong>Fortified Plant Milks:</strong> Almond, oat, soy – pick your favorite</li>
            <li><strong>Sardines:</strong> I know, I know. But they're calcium powerhouses with bones included</li>
            <li><strong>Sesame Seeds:</strong> Tahini counts! Drizzle it on everything</li>
            <li><strong>Fatty Fish:</strong> Salmon, mackerel (also great for mood and brain fog)</li>
          </ul>

          <h4>3. Omega-3 Fatty Acids (The Anti-Inflammatory Squad)</h4>
          <p>
            These reduce inflammation, support brain health, and help with mood swings.
          </p>
          <ul>
            <li>Wild-caught salmon</li>
            <li>Walnuts</li>
            <li>Chia seeds</li>
            <li>Hemp seeds</li>
            <li>Algae-based supplements (for the plant-based crew)</li>
          </ul>

          <h4>4. Protein at Every Meal</h4>
          <p>
            Metabolism is slowing down (rude, but true). Protein helps maintain muscle mass and keeps you fuller longer.
          </p>
          <ul>
            <li>Eggs (nature's perfect package)</li>
            <li>Greek yogurt</li>
            <li>Lean poultry</li>
            <li>Beans and legumes</li>
            <li>Nuts and seeds</li>
          </ul>

          <h3>Foods That Are Not Your Friends Right Now</h3>

          <div className="tour-guide-box">
            I'm not saying never eat these again. I'm saying your body might have some opinions about them now, and those
            opinions might include hot flashes, bloating, and mood swings. Listen to your body – she's trying to tell you something.
          </div>

          <h4>The Usual Suspects:</h4>
          <ul>
            <li><strong>Refined Sugar:</strong> Spikes blood sugar, worsens hot flashes, feeds inflammation</li>
            <li><strong>Alcohol:</strong> Sorry, but it triggers hot flashes and disrupts sleep</li>
            <li><strong>Caffeine:</strong> Can worsen hot flashes and anxiety (I know, the irony of needing coffee because you didn't sleep)</li>
            <li><strong>Spicy Foods:</strong> Delicious, but they're basically gasoline for hot flashes</li>
            <li><strong>Processed Foods:</strong> High sodium = bloating and blood pressure issues</li>
            <li><strong>High-Fat Dairy:</strong> Can worsen inflammation and hot flashes for some women</li>
          </ul>

          <div className="tip-box">
            <strong>The 80/20 Rule:</strong> Eat clean, hormone-supportive foods 80% of the time. The other 20%? Live your life.
            Have the chocolate. Enjoy the wine. Just not every night, and not right before bed if you want to sleep.
          </div>

          <h3>Sample Daily Menu</h3>

          <div className="recipe-box">
            <h4>Breakfast:</h4>
            <p>Greek yogurt with ground flaxseed, walnuts, berries, and a drizzle of honey</p>

            <h4>Mid-Morning Snack:</h4>
            <p>Hummus with colorful veggie sticks (bell peppers, carrots, cucumber)</p>

            <h4>Lunch:</h4>
            <p>Mixed greens salad with grilled salmon, chickpeas, avocado, and tahini dressing</p>

            <h4>Afternoon Snack:</h4>
            <p>Apple slices with almond butter</p>

            <h4>Dinner:</h4>
            <p>Stir-fry with tofu or chicken, lots of colorful vegetables, over quinoa or brown rice</p>

            <h4>Evening (if needed):</h4>
            <p>Small handful of nuts or herbal tea</p>
          </div>

          <h3>Hydration Station</h3>
          <p>
            Drink water. Lots of it. Like, more than you think you need. Dehydration worsens every symptom. Aim for 8-10 glasses
            daily. Add lemon, cucumber, or mint if plain water bores you. And no, coffee doesn't count.
          </p>

          <div className="tour-guide-box">
            Pro tip: If you're having hot flashes, keep ice water with you at all times. It's like having a fire extinguisher
            for your internal furnace. Room temperature water is for amateurs.
          </div>
        </div>
      )
    },
    {
      id: 'holistic',
      title: 'Holistic Remedies',
      content: (
        <div className="chapter">
          <h2>Chapter 4: Natural Remedies That Actually Work</h2>

          <div className="tour-guide-box">
            Welcome to the holistic medicine cabinet! This is where we pull out nature's arsenal against hot flashes,
            insomnia, and mood swings. No, sage isn't just for Thanksgiving, and yes, you're about to become that person
            who talks about adaptogens at dinner parties.
          </div>

          <h3>Herbal Allies</h3>

          <h4>Black Cohosh: The Hot Flash Fighter</h4>
          <p>
            This is the heavyweight champion of menopause herbs. Studies show it can reduce hot flashes and night sweats
            for many women.
          </p>
          <ul>
            <li><strong>Dose:</strong> 20-40mg twice daily of standardized extract</li>
            <li><strong>Best for:</strong> Hot flashes, mood swings, sleep issues</li>
            <li><strong>Note:</strong> Takes 4-8 weeks to see results (patience, grasshopper)</li>
          </ul>

          <h4>Red Clover: The Gentle Phytoestrogen</h4>
          <p>
            Contains isoflavones that act like mild estrogen in the body.
          </p>
          <ul>
            <li><strong>Dose:</strong> 40-80mg daily</li>
            <li><strong>Best for:</strong> Hot flashes, bone health, heart health</li>
            <li>Enjoy as tea or supplement</li>
          </ul>

          <h4>Maca Root: The Energy Booster</h4>
          <p>
            This Peruvian root helps balance hormones and boost energy without caffeine jitters.
          </p>
          <ul>
            <li><strong>Dose:</strong> 1.5-3g daily (powder form is easiest)</li>
            <li><strong>Best for:</strong> Energy, libido, mood</li>
            <li>Add to smoothies or oatmeal</li>
          </ul>

          <h4>Sage: Not Just for Turkey</h4>
          <p>
            Traditional remedy for sweating and hot flashes that actually has research backing it.
          </p>
          <ul>
            <li><strong>How to use:</strong> Fresh sage tea (steep 1 tbsp fresh leaves in hot water for 10 minutes)</li>
            <li><strong>Best for:</strong> Hot flashes, night sweats</li>
            <li>Drink 1-2 cups daily</li>
          </ul>

          <h4>Evening Primrose Oil: The Skin & Mood Soother</h4>
          <p>
            Rich in gamma-linolenic acid (GLA), helps with skin dryness and mood.
          </p>
          <ul>
            <li><strong>Dose:</strong> 500mg 1-2 times daily</li>
            <li><strong>Best for:</strong> Skin health, breast tenderness, mood swings</li>
          </ul>

          <div className="tip-box">
            <strong>Important:</strong> Always talk to your healthcare provider before starting herbal supplements, especially
            if you're taking other medications. Natural doesn't always mean harmless, and herbs can interact with prescriptions.
          </div>

          <h3>Adaptogens: Your Stress-Fighting Squad</h3>

          <div className="tour-guide-box">
            Adaptogens are like personal trainers for your stress response. They help your body adapt (hence the name) to
            stress and maintain balance. Think of them as diplomats negotiating peace between your hormones.
          </div>

          <h4>Ashwagandha: The Anxiety Assassin</h4>
          <ul>
            <li>Reduces cortisol (stress hormone)</li>
            <li>Improves sleep quality</li>
            <li>Boosts mood and energy</li>
            <li><strong>Dose:</strong> 300-500mg twice daily</li>
          </ul>

          <h4>Rhodiola: The Fatigue Fighter</h4>
          <ul>
            <li>Increases energy and stamina</li>
            <li>Reduces mental fog</li>
            <li>Improves stress resilience</li>
            <li><strong>Dose:</strong> 200-400mg in the morning</li>
          </ul>

          <h4>Holy Basil (Tulsi): The Mood Stabilizer</h4>
          <ul>
            <li>Balances cortisol</li>
            <li>Reduces anxiety</li>
            <li>Supports cognitive function</li>
            <li>Enjoy as tea or supplement</li>
          </ul>

          <h3>Lifestyle Medicine</h3>

          <h4>Movement That Matters</h4>
          <p>
            Exercise isn't just about fitting into your jeans (though that's a nice bonus). It's essential for:
          </p>
          <ul>
            <li>Reducing hot flash frequency</li>
            <li>Improving mood and sleep</li>
            <li>Maintaining bone density</li>
            <li>Supporting heart health</li>
            <li>Preserving muscle mass</li>
          </ul>

          <p><strong>The Perfect Menopause Exercise Mix:</strong></p>
          <ul>
            <li><strong>Strength Training:</strong> 2-3x per week (weights, resistance bands, bodyweight)</li>
            <li><strong>Cardio:</strong> 150 minutes per week (walking, swimming, dancing, biking)</li>
            <li><strong>Yoga or Stretching:</strong> Daily if possible (flexibility and stress relief)</li>
            <li><strong>Balance Work:</strong> Important for preventing falls as we age</li>
          </ul>

          <h4>Sleep Hygiene: Because 3 AM Wake-Ups Are Not a Hobby</h4>
          <ul>
            <li>Keep bedroom cool (60-67°F is optimal – yes, really)</li>
            <li>Use breathable bedding (cotton or bamboo)</li>
            <li>Layer bedding so you can adjust easily</li>
            <li>No screens 1 hour before bed (the blue light is not your friend)</li>
            <li>Magnesium supplement before bed (300-400mg)</li>
            <li>Consider melatonin (0.5-3mg) if needed</li>
            <li>Lavender essential oil on pillow or diffuser</li>
          </ul>

          <div className="recipe-box">
            <h4>Sleep-Inducing Evening Tea Blend</h4>
            <p>Mix equal parts:</p>
            <ul>
              <li>Chamomile (calming)</li>
              <li>Passionflower (sleep-promoting)</li>
              <li>Lemon balm (anxiety-reducing)</li>
              <li>Valerian root (sedative properties)</li>
            </ul>
            <p>Steep 1-2 teaspoons in hot water for 10 minutes. Drink 30-60 minutes before bed.
            Add honey if needed, but no sugar.</p>
          </div>

          <h4>Stress Management: Non-Negotiable</h4>
          <p>
            Stress makes every menopause symptom worse. EVERY. SINGLE. ONE. Here's your stress-busting toolkit:
          </p>
          <ul>
            <li><strong>Meditation:</strong> Even 5-10 minutes daily helps</li>
            <li><strong>Deep Breathing:</strong> 4-7-8 technique (inhale 4, hold 7, exhale 8)</li>
            <li><strong>Journaling:</strong> Brain dump before bed</li>
            <li><strong>Nature Time:</strong> 20 minutes outside daily</li>
            <li><strong>Social Connection:</strong> Don't isolate yourself</li>
            <li><strong>Say No:</strong> Your new favorite phrase</li>
          </ul>

          <h4>Acupuncture & Acupressure</h4>
          <p>
            Studies show acupuncture can reduce hot flashes by up to 40%. Key acupressure points you can try at home:
          </p>
          <ul>
            <li><strong>Kidney 3:</strong> Inner ankle, for hot flashes</li>
            <li><strong>Liver 3:</strong> Top of foot between big and second toe, for mood</li>
            <li><strong>Spleen 6:</strong> Inner leg above ankle, for overall hormone balance</li>
          </ul>
          <p>Apply gentle pressure for 1-2 minutes, breathe deeply.</p>

          <div className="tour-guide-box">
            Real talk: You don't have to do everything on this list. Pick 3-5 things that resonate with you and commit to
            those. Consistency with a few remedies beats sporadic attempts at everything. This is a marathon, not a sprint
            – though sometimes it feels like you're sprinting away from a hot flash.
          </div>

          <h3>Supplements Worth Considering</h3>
          <ul>
            <li><strong>Vitamin B Complex:</strong> Energy and mood support</li>
            <li><strong>Vitamin D3:</strong> 2000-4000 IU daily (bone health, mood, immunity)</li>
            <li><strong>Magnesium:</strong> 300-400mg daily (sleep, muscle relaxation, anxiety)</li>
            <li><strong>Omega-3:</strong> 1000-2000mg EPA/DHA (heart, brain, inflammation)</li>
            <li><strong>Probiotics:</strong> Gut health affects everything, including mood</li>
            <li><strong>Calcium:</strong> 1200mg daily (preferably from food, supplement if needed)</li>
          </ul>

          <div className="tip-box">
            <strong>Quality Matters:</strong> Not all supplements are created equal. Look for third-party testing (USP, NSF,
            ConsumerLab), and buy from reputable brands. Your local health food store staff can help you navigate options.
          </div>
        </div>
      )
    },
    {
      id: 'relationships',
      title: 'Relationships',
      content: (
        <div className="chapter">
          <h2>Chapter 5: Keeping the Fire Burning (Without Hot Flashes)</h2>

          <div className="tour-guide-box">
            Alright, let's talk about the elephant in the bedroom – or rather, the woman having a hot flash in the bedroom
            who just kicked off all the covers while her partner shivers. Menopause changes relationships, especially intimate
            ones. But here's the secret: it doesn't have to change them for the worse. In fact, many women report better
            relationships after menopause. Intrigued? Keep reading.
          </div>

          <h3>Communication: The Unsexy Foundation of Great Relationships</h3>

          <p>
            If you take nothing else from this chapter, take this: Your partner cannot read your mind. They don't know that
            your irritability is hormones, not them. They don't understand why you're suddenly uninterested in sex. They might
            think they did something wrong when you're crying during a commercial about puppies.
          </p>

          <h4>How to Talk About What You're Going Through:</h4>

          <ul>
            <li><strong>Be Direct:</strong> "I'm going through menopause, and it's affecting me in these ways..."</li>
            <li><strong>Educate Them:</strong> Share this ebook! Or articles. Many partners want to help but don't know how.</li>
            <li><strong>Be Specific:</strong> "When I'm having a hot flash, don't ask if I'm okay 50 times. Just hand me ice water."</li>
            <li><strong>Express Needs, Not Complaints:</strong> "I need you to be patient with me right now" vs "You never understand me"</li>
            <li><strong>Use Humor:</strong> "My hormones are currently running the show, and they're terrible managers"</li>
          </ul>

          <div className="tip-box">
            <strong>Partner Cheat Sheet:</strong> Consider writing a list of things that help and things that don't. For example:
            <br/><br/>
            <strong>Helpful:</strong> Keeping a fan in the bedroom, not taking my mood swings personally, initiating affection
            without pressure for sex, doing an extra household chore without being asked.
            <br/><br/>
            <strong>Not Helpful:</strong> Suggesting I'm overreacting, comparing me to other women, treating me like I'm fragile,
            making jokes about my symptoms.
          </div>

          <h3>The Intimacy Evolution</h3>

          <div className="tour-guide-box">
            Let's address the naked truth: sex might change during and after menopause. Your libido might tank. Vaginal
            dryness is real and uncomfortable. You might feel less desirable. BUT – and this is a big but – many women report
            having the best sex of their lives after menopause. How? Let me show you.
          </div>

          <h4>Understanding What Changed</h4>

          <p><strong>Physical Changes:</strong></p>
          <ul>
            <li>Vaginal tissue becomes thinner and less lubricated (decreased estrogen)</li>
            <li>Blood flow to genital area decreases</li>
            <li>Orgasms might take longer to achieve or feel different</li>
            <li>Testosterone decline affects libido</li>
          </ul>

          <p><strong>Emotional Changes:</strong></p>
          <ul>
            <li>Body image issues (weight gain, changing shape)</li>
            <li>Fatigue from poor sleep</li>
            <li>Stress and mood swings</li>
            <li>Feeling "unsexy" or "old"</li>
          </ul>

          <h4>Addressing Physical Discomfort</h4>

          <p><strong>1. Vaginal Moisturizers & Lubricants</strong></p>
          <ul>
            <li><strong>Moisturizers:</strong> Use 2-3x per week (even when not having sex) – try Hyalo Gyn, Revaree, or Replens</li>
            <li><strong>Lubricants:</strong> Use every time during intimacy
              <ul>
                <li>Water-based: Good for sensitive skin (Sliquid, Good Clean Love)</li>
                <li>Silicone-based: Longer-lasting (Überlube, Pjur)</li>
                <li>Oil-based: Natural options like coconut oil (not latex-safe)</li>
              </ul>
            </li>
          </ul>

          <p><strong>2. Vaginal Estrogen</strong></p>
          <p>
            Local estrogen (cream, tablet, or ring) can dramatically improve vaginal health without systemic hormone exposure.
            Talk to your doctor – this is often a game-changer.
          </p>

          <p><strong>3. Pelvic Floor Physical Therapy</strong></p>
          <p>
            Yes, this is a real thing, and it's amazing. A pelvic floor PT can help with pain, dryness, and even orgasm quality.
            Not all heroes wear capes; some wear scrubs and know way too much about your vagina.
          </p>

          <h4>Reigniting Desire</h4>

          <div className="tour-guide-box">
            Here's a secret: spontaneous desire (seeing your partner and immediately wanting sex) decreases with age for many
            women. But responsive desire (becoming aroused after physical intimacy begins) often stays strong. This means you
            might need to "start the engine" before your motor gets running. And that's completely normal!
          </div>

          <p><strong>Strategies to Boost Libido:</strong></p>

          <ul>
            <li><strong>Schedule It:</strong> I know, so romantic. But seriously, scheduling intimacy takes pressure off and
            ensures it happens. Plus, you can prep (mentally and physically).</li>
            <li><strong>Redefine Sex:</strong> Penetration isn't the only way to be intimate. Expand your definition to include
            sensual massage, oral sex, mutual masturbation, using toys together.</li>
            <li><strong>Focus on Pleasure, Not Performance:</strong> Remove the goal of orgasm and just enjoy sensation.</li>
            <li><strong>Try Novelty:</strong> New positions, locations, role play, toys – shake things up</li>
            <li><strong>Prioritize Foreplay:</strong> Like, a LOT of foreplay. Your body needs more time to warm up now.</li>
            <li><strong>Solo Exploration:</strong> Masturbation helps you understand what feels good now and keeps blood flow
            to the area</li>
          </ul>

          <p><strong>Libido-Boosting Supplements:</strong></p>
          <ul>
            <li>Maca root (mentioned earlier – it really helps!)</li>
            <li>Ginseng</li>
            <li>Tribulus terrestris</li>
            <li>L-arginine (improves blood flow)</li>
            <li>DHEA (talk to your doctor about this one)</li>
          </ul>

          <div className="recipe-box">
            <h4>Aphrodisiac Dinner for Two</h4>
            <p>Set the mood with foods that actually support arousal:</p>
            <ul>
              <li><strong>Starter:</strong> Oysters (zinc boosts libido) with champagne</li>
              <li><strong>Main:</strong> Grilled salmon with asparagus and garlic (blood flow boosters)</li>
              <li><strong>Dessert:</strong> Dark chocolate-dipped strawberries (antioxidants and mood boosters)</li>
            </ul>
            <p>Light candles, put on music, take your time. The anticipation is part of the fun.</p>
          </div>

          <h3>Non-Sexual Intimacy Matters Too</h3>

          <p>
            Sometimes you need connection without the pressure of sex. These activities maintain intimacy and often lead to
            more desire naturally:
          </p>

          <ul>
            <li><strong>Cuddle Without Expectation:</strong> Physical touch releases oxytocin (the bonding hormone)</li>
            <li><strong>Take Baths Together:</strong> Relaxing and sensual without pressure</li>
            <li><strong>Give Massages:</strong> Trade back rubs, foot rubs, scalp massages</li>
            <li><strong>Dance Together:</strong> In your kitchen, doesn't matter if you're good</li>
            <li><strong>Share Vulnerabilities:</strong> Emotional intimacy fuels physical intimacy</li>
            <li><strong>Laugh Together:</strong> Watch comedies, share memes, be silly</li>
            <li><strong>Try Something New Together:</strong> Cooking class, hiking, painting – shared experiences bond you</li>
          </ul>

          <h3>When Your Partner Doesn't Get It</h3>

          <div className="tour-guide-box">
            Real talk: Some partners struggle with understanding or accepting menopause changes. They might make insensitive
            comments, pressure you for sex, or dismiss your symptoms. This is not okay, and you deserve support.
          </div>

          <p><strong>Steps to Take:</strong></p>

          <ol>
            <li><strong>Have a Serious Conversation:</strong> Choose a calm moment and clearly explain how their actions
            affect you.</li>
            <li><strong>Provide Resources:</strong> Give them articles, books, or videos about menopause. Sometimes hearing
            it from a third party helps.</li>
            <li><strong>Suggest Couples Counseling:</strong> A neutral third party can facilitate communication.</li>
            <li><strong>Set Boundaries:</strong> "I need you to stop making jokes about my symptoms. It hurts my feelings
            and makes me feel unsupported."</li>
            <li><strong>Evaluate the Relationship:</strong> If they continue to be dismissive or unsupportive, you might
            need to make some hard decisions. You deserve a partner who respects what you're going through.</li>
          </ol>

          <h3>Solo? No Problem!</h3>

          <p>
            Not in a relationship? This chapter still applies to you! Focus on:
          </p>

          <ul>
            <li><strong>Self-intimacy:</strong> Exploring your changing body through masturbation</li>
            <li><strong>Self-care:</strong> Treating yourself with the love you deserve</li>
            <li><strong>Friendships:</strong> Deep connections with friends provide emotional intimacy</li>
            <li><strong>Dating (if interested):</strong> Many women find empowerment in dating during/after menopause –
            you know yourself better now!</li>
          </ul>

          <div className="tip-box">
            <strong>The Bottom Line:</strong> Menopause changes relationships, but change doesn't mean worse. Many couples
            report deeper intimacy, better communication, and more satisfying sex after navigating this transition together.
            The key is communication, patience, creativity, and willingness to adapt. Oh, and lube. Lots of lube.
          </div>

          <h4>Final Relationship Wisdom</h4>

          <p>
            This is a season of your life, not your entire story. Your body is changing, yes. But you're also gaining wisdom,
            confidence, and the freedom to give fewer f*cks about what others think. That's incredibly sexy, even if you don't
            feel like it right now.
          </p>

          <p>
            Your intimate relationships can thrive during and after menopause – they just might look different than before.
            And different can be beautiful, satisfying, and even better than you imagined.
          </p>

          <div className="tour-guide-box">
            Remember: You are not broken. You are not less desirable. You are not past your prime. You're evolving, and
            evolution is powerful. Now go forth and communicate, lubricate, and appreciate your magnificent, changing body!
          </div>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: (
        <div className="chapter">
          <h2>Final Chapter: You've Got This</h2>

          <div className="tour-guide-box">
            Well, friend, we've reached the end of our tour through Menopause Land. You've learned about the biology,
            stocked your holistic medicine cabinet, revamped your diet, and got some real talk about relationships.
            But before you close this book, let me leave you with some final thoughts.
          </div>

          <h3>The Truth About Menopause</h3>

          <p>
            Menopause is not the end of anything except your period. It's not the death of your sexuality, your vitality,
            or your relevance. In many cultures, postmenopausal women are revered as wise elders. It's only in our youth-obsessed
            Western culture that we've pathologized this natural transition.
          </p>

          <p>
            Here's what menopause actually is:
          </p>

          <ul>
            <li>A biological transition that every woman experiences</li>
            <li>An opportunity to recalibrate your life priorities</li>
            <li>A time to advocate for your health and needs</li>
            <li>The beginning of a phase where you care less about others' opinions</li>
            <li>A chance to redefine who you are beyond fertility</li>
          </ul>

          <h3>Your Personalized Action Plan</h3>

          <p>
            Based on everything we've covered, here's how to move forward:
          </p>

          <h4>Immediate Actions (This Week):</h4>
          <ol>
            <li>Schedule a comprehensive checkup with your healthcare provider</li>
            <li>Start tracking your symptoms (apps like MenoLife or even a simple journal)</li>
            <li>Buy a good lubricant and vaginal moisturizer</li>
            <li>Add flaxseed and a probiotic to your daily routine</li>
            <li>Have an honest conversation with your partner about what you're experiencing</li>
          </ol>

          <h4>This Month:</h4>
          <ol>
            <li>Revamp your diet based on Chapter 3 recommendations</li>
            <li>Choose 2-3 herbal remedies to try and commit to 8 weeks</li>
            <li>Establish a sleep hygiene routine</li>
            <li>Start or adjust your exercise routine to include strength training</li>
            <li>Find a stress management practice that resonates with you</li>
          </ol>

          <h4>Ongoing:</h4>
          <ul>
            <li>Continue tracking symptoms to identify patterns and triggers</li>
            <li>Adjust your protocols based on what's working and what's not</li>
            <li>Stay connected with friends going through similar experiences</li>
            <li>Advocate for yourself with healthcare providers</li>
            <li>Maintain open communication in your relationships</li>
            <li>Practice self-compassion – some days will be harder than others</li>
          </ul>

          <h3>When to Seek Additional Help</h3>

          <p>
            Don't go it alone if:
          </p>

          <ul>
            <li>Symptoms are severely impacting your quality of life</li>
            <li>You're experiencing depression or anxiety that feels unmanageable</li>
            <li>Natural remedies aren't providing relief after 2-3 months</li>
            <li>You're having relationship problems that need professional support</li>
            <li>You have questions about hormone replacement therapy (HRT)</li>
          </ul>

          <p>
            There's no shame in seeking help. Whether it's a menopause specialist, therapist, naturopath, or support group –
            use all available resources.
          </p>

          <h3>The Silver Linings</h3>

          <div className="tour-guide-box">
            Yes, really. There are actual benefits to menopause. I'm not gaslighting you, I promise.
          </div>

          <ul>
            <li><strong>No More Periods:</strong> No tampons, no pads, no period underwear, no surprise stains. The freedom is real.</li>
            <li><strong>No Pregnancy Worries:</strong> Spontaneity is back on the menu (after that 12-month mark)!</li>
            <li><strong>Fewer Migraines:</strong> If you had hormonal migraines, they often improve or disappear.</li>
            <li><strong>Less PMS:</strong> No more monthly mood swings, cramps, or bloating.</li>
            <li><strong>Clearer Priorities:</strong> You naturally care less about trivial things and people-pleasing.</li>
            <li><strong>Increased Confidence:</strong> Many women report feeling more authentic and confident.</li>
            <li><strong>Better Sex:</strong> For many women (especially after initial adjustment), sex becomes more enjoyable
            without pregnancy fears and with better communication.</li>
            <li><strong>Personal Growth:</strong> This transition often sparks self-reflection and positive life changes.</li>
          </ul>

          <h3>A Letter to Your Future Self</h3>

          <p style={{ fontStyle: 'italic', padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
            Dear Future Me,
            <br/><br/>
            Remember when you were in the thick of it? The hot flashes that made you want to live in a walk-in freezer?
            The brain fog that had you googling "early onset Alzheimer's"? The night sweats that required a full wardrobe
            change at 3 AM?
            <br/><br/>
            You survived. More than that, you thrived.
            <br/><br/>
            You learned to listen to your body instead of fighting it. You discovered that self-care isn't selfish – it's
            survival. You found your voice and used it to advocate for yourself in doctors' offices, bedrooms, and boardrooms.
            <br/><br/>
            You're stronger now. Wiser. Less willing to tolerate bullshit. More connected to what truly matters. This
            transition, as difficult as it was, refined you like gold in fire.
            <br/><br/>
            And the best part? You're just getting started.
            <br/><br/>
            With love and respect,
            <br/>
            Your Past Self Who Was Just Trying to Make It Through the Day
          </p>

          <h3>Resources for Continued Learning</h3>

          <ul>
            <li><strong>The North American Menopause Society (NAMS):</strong> menopause.org</li>
            <li><strong>Podcast:</strong> "The Menopause Manifesto" by Dr. Jen Gunter</li>
            <li><strong>Book:</strong> "The Wisdom of Menopause" by Dr. Christiane Northrup</li>
            <li><strong>Book:</strong> "Estrogen Matters" by Dr. Avrum Bluming</li>
            <li><strong>Apps:</strong> MenoLife, Balance, Stella</li>
            <li><strong>Online Communities:</strong> r/Menopause (Reddit), Menopause Support Network on Facebook</li>
          </ul>

          <h3>Final Words from Your Tour Guide</h3>

          <div className="tour-guide-box">
            Thank you for taking this tour with me through the wild landscape of menopause. I hope you're leaving with less
            fear, more knowledge, and a sense that you can navigate this transition with grace, humor, and holistic support.
            <br/><br/>
            Remember: You're not losing anything essential during menopause. You're shedding what no longer serves you and
            stepping into a powerful new phase of life. Yes, there are challenges. Yes, it's uncomfortable sometimes. But
            uncomfortable isn't the same as unbearable, and transition isn't the same as tragedy.
            <br/><br/>
            You have everything you need to not just survive this, but to thrive through it. Your body is wise. Your spirit
            is resilient. And now your toolkit is fully stocked.
            <br/><br/>
            So go forth, brave woman. Navigate this transition with all the tools, knowledge, and confidence you've gained.
            And remember: on the other side of menopause is a woman who gives zero f*cks, knows exactly what she wants, and
            has the wisdom to make it happen.
            <br/><br/>
            That woman is incredibly powerful. That woman is you.
            <br/><br/>
            Now if you'll excuse me, I need to go find a fan. This tour guide just had a hot flash talking about hot flashes.
            The irony is not lost on me.
            <br/><br/>
            Stay cool (literally and figuratively),
            <br/>
            Your Menopause Tour Guide 🌸
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '2rem' }}>
            ✨ The End (Or Rather, The Beginning) ✨
          </div>
        </div>
      )
    }
  ]

  const totalChapters = chapters.length

  return (
    <div className="ebook-container">
      {chapters[currentChapter].content}

      <div className="navigation">
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            className={`nav-btn ${currentChapter === index ? 'active' : ''}`}
            onClick={() => setCurrentChapter(index)}
          >
            {chapter.title}
          </button>
        ))}
      </div>

      <div className="progress-indicator">
        Chapter {currentChapter + 1} of {totalChapters}
      </div>
    </div>
  )
}
