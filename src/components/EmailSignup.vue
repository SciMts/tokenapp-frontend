<template>
  <div>
    <modal-comp v-if="modalVisible" v-bind:modalVisible="this.modalVisible" @close="hideModal()">
      <h3 slot="header">Terms & Conditions</h3>
      <div slot="body">
        <div id="legal">
          <p><b>PLEASE READ THESE TERMS OF TOKEN SALE CAREFULLY. BY PURCHASING MODUM TOKENS, YOU AGREE TO THESE TERMS IN THEIR ENTIRETY. IF YOU DO NOT AGREE WITH THESE TERMS OF TOKEN SALE, DO NOT PURCHASE MODUM TOKENS. ANY ACQUISITION AND USE OF MODUM TOKENS IS SPECULATIVE AND CARRIES SIGNIFICANT FINANCIAL RISK, INCLUDING, BUT NOT LIMITED TO, THE POSSIBLE LOSS OF ALL VALUE.</b></p>

          <h4>I. INTRODUCTION</h4>
          <p>modum.io AG, Technoparkstrasse 1, 8005 Zürich (“modum.io”), is a Swiss company who is conducting a Token Sale. The primary goal of the token sale is to establish mechanisms in order for modum.io to efficiently execute its vision: ‘to improve supply chain operations with emerging technology’ and to align the interest of token holders with the interests of modum.io’s team and its shareholders. For more information on modum.io, it’s business and financials, please consult the Whitepaper which is available on modum.io’s token sale website. The contents of the Whitepaper, the Website & Blog in General, Social Media (Twitter, Blog, forum activity) and public statements are nonbinding and are subject to change by Modum.io at its sole discretion and do not form an integral part of these Terms of Token Sale.</p>
          <p><b>These Terms of Token Sale (“Terms“) constitute an agreement between modum.io and You. By purchasing MODUM Tokens, You acknowledge and agree, amongst others, (to) the following:</b></p>
          <ol>
            <li>YOU ARE SOLELY RESPONSIBLE FOR SEARCHING LEGAL, BUSINESS, TAX, REGULATORY, ACCOUNTING AND FINANCIAL ADVICE IN THE JURISDICTIONS RELEVANT FOR YOU WHEN PURCHASING MODUM TOKENS. YOU SHOULD NOT CONSTRUE THE CONTENTS OF THIS TERMS OF TOKEN SALE AS LEGAL, BUSINESS, TAX, ACCOUNTING, INVESTMENT OR OTHER ADVICE.</li>
            <li>modum.io is not a financial institution and does not provide financial advice or any other licensed services.</li>
            <li>Modum.io is issuing tokens on the Ethereum blockchain (“MODUM token“). Each MODUM token provides the tokenholder with none, but two rights:
              <ol>
                <li>The right to receive payments linked to the amount of dividends paid on an ordinary modum.io’ share pursuant to the procedure outlined in Section III of this Agreement;</li>
                <li>The right to vote on the achievement of a set of milestones which are defined by modum.io on a discretionary basis, and thus unlock 9.9 million MODUM token or parts thereof to modum.io in the case where a “Yes” vote is cast and to keep 9.9 million MODUM token or parts thereof locked where a “No” vote is cast.</li>
              </ol>
            </li>
            <li>MODUM Tokens neither provide the tokenholder with a conversion right into shares or other equity of modum.io nor any other right whatsoever, not represent or confer any ownership right or stake, share or security or equivalent rights, voting right or any right to receive future revenue shares, intellectual property rights or any other form of participation in modum.io and its corporate affiliates, other than the rights mentioned above in Section 3.a. + 3.b.</li>
            <li>During the annual shareholder meeting, the shareholders decide on a proposal by modum.io’s board regarding the usage of profit in the form of distribution of dividends. Distribution of a dividend on shares shall be announced in the “Tokenholder Information” section of the modum.io website; such announcement shall include the date and time of the dividend payment and the dividend amount per ordinary share in CHF as well as the ETH/CHF exchange rate which shall become applicable. Within 10 business days of the date of payment of the dividend, modum.io will make available a payment amount to each authenticated tokenholder equal to the dividend per share agreed to be distributed to the shareholders. MODUM Tokens shall receive these payments in ETH, at the exchange rate specified by modum.io.</li>
            <li>THE OFFER OF MODUM TOKENS (THE “OFFER”) IS NOT BEING MADE DIRECTLY OR INDIRECTLY IN, NOR IS IT INTENDED TO EXTEND TO, A COUNTRY OR JURISDICTION WHERE SUCH OFFER WOULD BE CONSIDERED UNLAWFUL OR IN WHICH IT WOULD OTHERWISE BREACH ANY APPLICABLE LAW OR REGULATION OR WHICH WOULD REQUIRE MODUM.IO TO AMEND ANY TERM OR CONDITION OF THE OFFER IN ANY WAY OR WHICH WOULD REQUIRE MODUM.IO TO MAKE ANY FILING WITH, OR TAKE ANY ADDITIONAL ACTION WITH REGARDS TO, ANY GOVERNMENTAL, REGULATORY OR LEGAL AUTHORITY (“COUNTRY OR JURISDICTION”). THESE TERMS DO NOT CONSTITUTE, AND MAY NOT BE USED FOR THE PURPOSES OF, AN OFFER OR SOLICITATION TO ANY PERSON TO WHOM IT IS UNLAWFUL TO MAKE SUCH OFFER OR SOLICITATION. NEITHER THIS DOCUMENT, NOR ANY OF THE TOKENS HAS BEEN OR WILL BE REGISTERED OR FILED UNDER THE SECURITIES LAWS OR REGULATIONS OF ANY JURISDICTION OR APROVED, RECOMMENDED OR DISAPPROVED BY ANY SECURITIES OR OTHER REGULATORY AUTHORITY NOR HAS ANY SUCH AUTHORITY CONFIRMED THE ACCURACY OR DETERMINED THE ADEQUACY OF THIS DOCUMENT. OFFERING MATERIALS RELATING TO THIS OFFER MAY NOT BE DISTRIBUTED IN NOR SENT TO SUCH COUNTRY OR JURISDICTION AND MAY NOT BE USED FOR THE PURPOSES OF SOLICITING THE PURCHASES OF MODUM TOKENS FROM ANYONE IN SUCH COUNTRY OR JURISDICTION.</li>
            <li>These Terms are furnished for the purpose of providing certain information with regards to purchasing MODUM Tokens. These Terms are to be used by You solely in connection with the consideration of the purchase of MODUM Tokens as described herein. These Terms are not a prospectus and do not purport to contain all information You may require to form a decision whether or not to purchase MODUM Tokens.</li>
            <li>THE PURCHASE AND ANY OTHER ACQUISITION OF MODUM TOKENS CARRIES WITH IT SIGNIFICANT RISK. PRIOR TO PURCHASE, CAREFULLY CONSIDER THE POTENTIAL RISKS AND, TO THE EXTENT NECESSARY, CONSULT A LAWYER, ACCOUNTANT, AND/OR TAX PROFESSIONAL TO EVALUATE THE RISK ENTAILED. DO NOT OVERCOMMIT. WE MAKE NO PROMISES OF POSSIBLE GAINS OR RETURNS. YOU CAN POTENTIALLY LOSE ALL YOUR MONEY IF THE MARKET PRICE OF MODUM TOKEN DROPS TO ZERO.</li>
            <li><b>TO THE EXTENT PERMITTED BY APPLICABLE LAW, MODUM.IO AND ITS AUXILIARY PERSONS SHALL NOT BE LIABLE FOR ANY DAMAGE ARISING OUT OF, OR IN CONNECTION WITH, THESE TERMS AND/OR THE SALE OF MODUM TOKENS.</b></li>
            <li>These Terms may be amended by modum.io at its sole discretion at any time. The amended version will be published on modum.io’s token sale website and the terms described therein will come into effect upon publication on modum.io’s token sale website.</li>
          </ol>

          <h4>II. NOTIFICATIONS TO PURCHASERS IN DIFFERENT JURISDICTIONS</h4>
          <p>The information below is for general guidance only and it is the sole responsibility of You inform Yourself of, and to observe, all applicable laws and regulations of any relevant jurisdiction. No person has been authorised by modum.io to issue advertisments or to provide any intelligence with regards to the contents of these Terms and, if issued, given or made, such advertisement and/or intelligence must not be trusted as duly authorized by modum.io’s. The distribution of these Terms may be restricted and thus persons into whose possession this document comes are obliged to obtain information themselves about possible legal and regulatory restrictions and to abide by these laws and regulations.</p>
          <p>You should inform Yourself as to: (a) the legal requirements of Your own country for the purchase, holding, transfer or other disposal of MODUM Tokens; (b) any foreign exchange restrictions applicable to the purchase, holding, transfer or other disposal of MODUM Tokens which they might encounter; and (c) the income and other tax consequences which may apply in Your own country as a result of the purchase, holding, transfer or other disposal of MODUM Tokens. You must rely upon their own representatives, including Your own legal advisers and accountants, as to legal, tax or any other related matters concerning modum.io, MODUM Tokens and a purchase thereof. The contents of modum.io’s website, including any websites accessible from hyperlinks on the modum.io’s website, do not form an integral part of these Terms.</p>
          <p><b>THE CONTENTS OF THESE TERMS HAVE NOT BEEN APPROVED BY ANY AUTHORISED PERSON IN GENERAL AND SPECIFICALLY NOT WITHIN THE MEANING OF AN AUTHORIZED PERSON ACCORDING TO EU LAW. RELYING ON THIS DOCUMENT FOR THE PURPOSE OF PURCHASING MODUM TOKENS MAY EXPOSE YOU TO A SIGNIFICANT RISK OF LOSS OF ALL ASSETS. THESE TERMS ARE NOT TO BE CONSTRUED AS A PROSPECTUS UNDER ANY JURISDICTIONS’S APPLICABLE LAW.</b></p>
          <ol>
            <li><b>If You are residing in the United States of America:</b><p>MODUM TOKENS WILL NOT BE AND HAVE NOT BEEN REGISTERED WITH THE SEC UNDER THE US SECURITIES ACT OF 1933, AS AMENDED (THE “US SECURITIES ACT”) OR ANY STATE SECURITIES LAWS OF THE UNITES STATES OF AMERICA („U.S.“). "U.S." MEANS THE UNITED STATES OF AMERICA, ITS TERRITORIES AND POSSESSIONS, ANY STATE OF THE UNITED STATES OF AMERICA AND THE DISTRICT OF COLUMBIA.THUS, MODUM TOKENS MAY NOT BE OFFERED, SOLD OR DELIVERED IN THE US OR TO OR FOR THE ACCOUNT OR BENEFIT OF US PERSONS AS DEFINED IN REGULATION S UNDER THE US SECURITIES ACT (A “US PERSON“).<b>YOU REPRESENT THAT YOU ARE NOT LOCATED IN THE U.S. AND ARE NOT PARTICIPATING IN THE OFFER FROM THE U.S. OR ARE ACTING ON A NONDISCRETIONARY BASIS FOR A PRINCIPAL LOCATED OUTSIDE THE U.S. THAT YOU ARE NOT GIVING AN ORDER TO PARTICIPATE IN THE OFFER FROM THE U.S. YOU ARE NOT ENTITLED TO PARTAKE IN THE TOKEN SALE AND MAY NEITHER DIRECTLY NOR INDIRECTLY PURCHASE MODUM TOKENS THROUGH ANY MEANS, BE IT ON THE PRIMARY OR THE SECONDARY MARKET.</b>MODUM.IO WILL TAKE TECHNICAL MEASURES TO MAKE SURE YOU CANNOT PARTICIPATE („U.S. BAN“). IF YOU, VIA TECHNICAL AND/OR OTHER MEANS CIRCUMVENT MODUM’S U.S. BAN, MODUM WILL HAVE FULFILLED IT’S DUTY AND WILL NOT BE HELD LIABLE FOR BREACH OF ANY US REGULATIONS, INCLUDING, BUT NOT LIMITED TO, THE US SECURITIES ACT („BREACH“). IN CASE MODUM.IO WILL BE HELD LIABLE ANYHOW DUE TO SUCH BREACH, YOU WILL FULLY INDEMNIFY MODUM.IO FOR ANY DAMAGE INCURRED, FEES LEVVIED ETC. AS A RESULT OF SUCH BREACH.</p>
            </li>
            <li>If You are residing in the European Economic Area:<p>DUE TO THE DIRECTIVE 2003/71/EC AND AMENDMENTS THERETO, INCLUDING THE 2010 PD AMENDING DIRECTIVE (DIRECTIVE 2010/73/EC), TO THE EXTENT IMPLEMENTED IN THE RELEVANT MEMBER STATE („PROSPECTUS DIRECTIVE“), WITH EFFECT FROM AND INCLUDING THE DATE ON WHICH THE PROSPECTUS DIRECTIVE IS IMPLEMENTED IN A MEMBER STATE OF THE EUROPEAN ECONOMIC AREA (“RELEVANT DATE OF IMPLEMENTATION”), THAT HAS IMPLEMENTED THE PROSPECTUS DIRECTIVE (“RELEVANT MEMBER STATE”), <b>AN OFFER OF MODUM TOKENS MAY NOT BE MADE TO THE PUBLIC IN THAT RELEVANT MEMBER STATE</b> OTHER THAN:</p>
              <ul>
                <li><b>TO ANY LEGAL ENTITY WHICH IS A QUALIFIED INVESTOR AS DEFINED IN THE PROSPECTUS DIRECTIVE;</b></li>
                <li><b>TO FEWER THAN 150 NATURAL OR LEGAL PERSONS WITH REGARDS TO EACH RELEVANT MEMBER STATE</b> (OTHER THAN QUALIFIED INVESTORS AS DEFINED IN THE PROSPECTUS DIRECTIVE), AS PERMITTED UNDER THE PROSPECTUS DIRECTIVE; OR</li>
                <li><b>PROVIDED THAT NO SUCH OFFER OF SECURITIES SHALL REQUIRE MODUM.IO TO PUBLISH A PROSPECTUS PURSUANT TO ARTICLE 3 OF THE PROSPECTUS DIRECTIVE.</b></li>
              </ul>
              FOR PURPOSES OF THIS SECTION II.2., THE EXPRESSION AN “OFFER OF MODUM TOKENS TO THE PUBLIC” IN ANY RELEVANT MEMBER STATE MEANS THE PROLIFERATION OF IN ANY FORM PRESENTED COMMUNICATION AND BY ANY MEANS OF SUFFICIENT INFORMATION ON THE TERMS OF THE OFFER SO AS TO ENABLE YOU TO DECIDE TO PURCHASE OR SUBSCRIBE FOR THE MODUM TOKENS, AS THE EXPRESSION MAY BE VARIED IN THAT RELEVANT MEMBER STATE BY ANY MEASURE IMPLEMENTING THE PROSPECTUS DIRECTIVE IN THAT MEMBER STATE.
            </li>
            <li><b>If You are residing in Switzerland:</b><p>MODUM Tokens will not be listed on any regulated stock exchange, such as SIX Swiss Exchange, or SIX. These Terms have been prepared without regard to the legal standards for prospectuses under art. 1156 or art. 652a of the Swiss Code of Obligations or the legal standards for facilitated prospectuses under art. 5 of the Collective Investment Schemes Act („CISA“) or art. 27 ff. of the SIX Listing Rules or the listing rules of any other stock exchange in Switzerland. Neither these Terms nor any other material relating to the Offer, modum.io or MODUM Tokens will be or have been filed with or approved by any Swiss regulatory authority. Specifically, these Terms will not be filed with, and the Offer of MODUm Tokens will not be supervised by, the Swiss Financial Market Supervisory Authority FINMA (FINMA). Furthermore, the Offer of MODUM Tokens has not been and will not be authorized under the CISA. Thus, the protection which is given to pruchasers of interests or units in collective investment schemes under the CISA does not extend to purchasers of MODUM Tokens.</p>
            </li>
            <li><b>If You are residing in the United Kingdom:</b><p>THESE TERMS AND OTHER DOCUMENTS IN CONNECTION WITH THE OFFER OF MODUM TOKENS ARE NOT FOR DISTRIBUTION TO PERSONS WHOSE PLACE OF RESIDENCE, SEAT OR HABITUAL ABODE IS IN THE UNITED KINGDOM. This does not apply, however, to persons who (i) have professional experience in matters relating to investments or (ii) are persons falling within Article 49 (2) (a) to (d) ("high net worth companies, unincorporated associations etc.") of The Financial Services and Markets Act 2000 (Financial Promotion) Order 2005 in the United Kingdom or (iii) to whom it may otherwise lawfully be passed on (all such persons together being referred to as "Relevant persons"). IF YOU YOUR PLACE OF RESIDENCE, SEAT OR HABITUAL ABODE IS IN THE UNITED KINGDOM AND YOU ARE NOT A RELEVANT PERSON, YOU MAY NOT PARTICIPATE IN THE PURCHASE OF MODUM TOKENS, NEITHER DIRECTLY OR INDIRECTLY, ON THE PRIMARY OR THE SECONDARY MARKET. PLEASE CHECK WHETHER YOU ARE A RELEVANT PERSON WITH REGARDS TO THIS SECTION II.4. BY PURCHASING MODUM TOKENS YOU REPRESENT THAT YOU ARE A RELEVANT PERSON WITH REGARDS TO THE REGULATIONS IN THIS SECTION. FALSELY REPRESENTING TO BE A RELEVANT PERSON WILL LEAD TO YOUR OBLIGATION TO INDEMNIFY MODUM.IO FOR ANY DAMAGE AND OR FEES INCURRED AS A RESULT OF A BREACH OF THE REGULATIONS IN THIS SECTION. MODUM.IO REMAINS THE RIGHT TO ASK YOU TO PROVIDE PROOF OF YOUR BEING A RELEVANT PERSON. IF YOU FAIL TO PROVIDE PROOF, MODUM.IO WILL NOT LET YOU PURCHASE MODUM TOKENS BUT SEND BACK WHATEVER FUNDS YOU’VE USED TO PARTICIPATE TO WHATEVER ADDRESS USED. These Terms and its contents are confidential and should not be distributed, published or reproduced (in whole or in part) or disclosed by recipients to any other persons in the United Kingdom.</p>
            </li>
            <li><b>If You are residing in Singapore:</b><p>THESE TERMS AND ANY OTHER DOCUMENT OR MATERIAL IN CONNECTION WITH THE OFFER OR SALE, OR INVITATION FOR SUBSCRIPTION OR PURCHASE, OF MODUM TOKENS MAY NOT BE CIRCULATED OR DISTRIBUTED, NOR MAY MODUM TOKENS BE OFFERED OR SOLD, OR BE MADE THE SUBJECT OF AN INVITATION FOR SUBSCRIPTION OR PURCHASE, WHETHER DIRECTLY OR INDIRECTLY, TO PERSONS IN SINGAPORE. This does not apply, however, to an institutional investor under Section 274 of the Securities and Futures Act, Chapter 289 of Singapore (the “SFA”), (ii) to a relevant person, or any person pursuant to Section 275(1A), and in accordance with the conditions, specified in Section 275 of the SFA, (iii) where the transfer is by operation of law; (iv) as specified in Section 276(7) of the SFA or (v) pursuant to, and in accordance with the conditions of, any other applicable provisions of the SFA („Relevant person“).
            These Terms will not be and have not been filed and/or registered as a prospectus with the Monetary Authority of Singapore („MAS“). IF YOU YOUR PLACE OF RESIDENCE, SEAT OR HABITUAL ABODE IS IN SINGAPORE AND YOU ARE NOT A RELEVANT PERSON YOU MAY NOT PARTICIPATE IN THE PURCHASE OF MODUM TOKENS, NEITHER DIRECTLY OR INDIRECTLY, ON THE PRIMARY OR THE SECONDARY MARKET. PLEASE CHECK WHETHER YOU ARE A RELEVANT PERSON WITH REGARDS TO THIS SECTION II.5. BY PURCHASING MODUM TOKENS YOU REPRESENT THAT YOU ARE A RELEVANT PERSON WITH REGARDS TO THE REGULATIONS IN THIS SECTION. FALSELY REPRESENTING TO BE A RELEVANT PERSON WILL LEAD TO YOUR OBLIGATION TO INDEMNIFY MODUM.IO FOR ANY DAMAGE AND OR FEES INCURRED AS A RESULT OF A BREACH OF THE REGULATIONS IN THIS SECTION. MODUM.IO REMAINS THE RIGHT TO ASK YOU TO PROVIDE PROOF OF YOUR BEING A RELEVANT PERSON. IF YOU FAIL TO PROVIDE PROOF, MODUM.IO WILL NOT LET YOU PURCHASE MODUM TOKENS BUT SEND BACK WHATEVER FUNDS YOU’VE USED TO PARTICIPATE TO WHATEVER ADDRESS USED.</p></li>
            <li><b>If You are residing in Canada:</b><p>MODUM TOKENS HAVE NOT BEEN NOR WILL THEY BE QUALIFIED FOR SALE TO THE PUBLIC UNDER APPLICABLE CANADIAN SECURITIES LAWS AND, ACCORDINGLY, ANY OFFER AND SALE OF MODUM TOKENS IN CANADA WILL BE MADE ON A BASIS WHICH IS EXEMPT FROM THE PROSPECTUS REQUIREMENTS OF CANADIAN SECURITIES LAWS. Any resale of the Tokens must be made in accordance with, or pursuant to an exemption from, or in a transaction not subject to, the prospectus requirements of those laws. In addition, in order to comply with the dealer registration requirements of Canadian securities laws, any resale of the Tokens must be made either by a person not required to register as a dealer under applicable Canadian securities laws, or through an appropriately registered dealer or in accordance with an exemption from the dealer registration requirements. IF YOU RESIDE IN CANADA, YOU REPRESENT THAT YOU HAVE LEARNED OF THIS OFFER BY YOUR OWN INITIATIVE AND YOU WERE NOT SOLICITED BY MODUM.IO, OTHERWISE YOU MAY NOT PARTICIPATE IN THE PURCHASE OF MODUM TOKENS. YOU ARE REQUIRED TO OBTAIN LEGAL ADVICE FROM A CANADIAN LAWYER TO VERIFY WHETHER THE RESALE OF MODUM TOKENS IS ALLOWED IN YOUR JURISDICTION.</p>
            </li>
            <li><b>If You are residing in Hong Kong:</b><p>MODUM TOKENS MAY NOT BE SOLD OR OFFERED IN HONG KONG BY MEANS OF ANY DOCUMENT OTHER THAN (I) TO “PROFESSIONAL INVESTORS” WITHIN THE MEANING OF THE SECURITIES AND FUTURES ORDINANCE (CAP.571, LAWS OF HONG KONG) AND ANY RULES MADE THEREUNDER OR (II) IN CIRCUMSTANCES WHICH DO NOT CONSTITUTE AN OFFER TO THE PUBLIC WITHIN THE MEANING OF THE COMPANIES ORDINANCE (CAP.32, LAWS OF HONG KONG), OR (iii) in other circumstances which do not result in the document within the meaning of the Companies Ordinance (Cap.32, Laws of Hong Kong) being a “prospectus”. No advertisement, invitation or document relating to MODUM Tokens may be issued to any person for the purpose of issue (in each case whether in Hong Kong or elsewhere) other than with respect to tokens which are or are intended to be disposed of only to persons outside Hong Kong or only to “professional investors” within the meaning of the Securities and Futures Ordinance (Cap. 571, Laws of Hong Kong) and any rules made thereunder. IF YOUR PLACE OF RESIDENCE, SEAT OR HABITUAL ABODE IS IN HONG KONG AND YOU ARE NOT A PROFESSIONAL INVESTOR, YOU MAY NOT PARTICIPATE IN THE PURCHASE OF MODUM TOKENS, NEITHER DIRECTLY OR INDIRECTLY, ON THE PRIMARY OR THE SECONDARY MARKET. BY PURCHASING MODUM TOKENS YOU REPRESENT THAT YOU ARE A PROFESSIONAL INVESTOR WITH REGARDS TO THE REGULATIONS SET OUT IN THIS SECTION II.7. FALSELY REPRESENTING TO BE A RELEVANT PERSON WILL LEAD TO YOUR OBLIGATION TO INDEMNIFY MODUM.IO FOR ANY DAMAGE AND OR FEES INCURRED AS A RESULT OF A BREACH OF THE REGULATIONS IN THIS SECTION. MODUM.IO REMAINS THE RIGHT TO ASK YOU TO PROVIDE PROOF OF YOUR BEING A RELEVANT PERSON. IF YOU FAIL TO PROVIDE PROOF, MODUM.IO WILL NOT LET YOU PURCHASE MODUM TOKENS BUT SEND BACK WHATEVER FUNDS YOU’VE USED TO PARTICIPATE TO WHATEVER ADDRESS USED.</p>
            </li>
            <li><b>If You are residing in Japan:</b><p>MODUM TOKENS HAVE NOT BEEN AND WILL NOT BE REGISTERED UNDER THE FINANCIAL INSTRUMENTS AND EXCHANGE ACT, AS AMENDED (THE “FIEA”). THIS DOCUMENT IS NOT AN OFFER OF SECURITIES FOR SALE, DIRECTLY OR INDIRECTLY, IN JAPAN OR TO, OR FOR THE BENEFIT OF, ANY RESIDENT OF JAPAN (which term as used herein means any person residing in Japan, including any corporation or entity organized under the laws of Japan) or to others for reoffer or resale, directly or indirectly, in Japan or to, or for the benefit of, any resident of Japan, except pursuant to an exemption from the securities registration requirements under the FIEA and otherwise in compliance with such law and any other applicable laws, regulations and ministerial guidelines of Japan. IF YOU RESIDE IN CANADA, YOU REPRESENT THAT YOU HAVE LEARNED OF THIS OFFER BY YOUR OWN INITIATIVE AND YOU WERE NOT SOLICITED BY MODUM.IO, OTHERWISE YOU MAY NOT PARTICIPATE IN THE PURCHASE OF MODUM TOKENS. FALSE REPRESENTATION TO WILL LEAD TO YOUR OBLIGATION TO INDEMNIFY MODUM.IO FOR ANY DAMAGE AND OR FEES INCURRED AS A RESULT OF A BREACH OF THE REGULATIONS IN THIS SECTION</p>
            </li>
            <li><b>If You are resding in an embargo jurisdiction (Iran, Democratic People’s Republic of Korea, Syria, Sudan, Cuba):</b><p>You are not entitled to partake in the Token Sale and may neither directly nor indirectly purchase MODUM Tokens through any means, be it on the primary or the secondary market. MODUM will take technical measures to make sure You cannot participate. If You, via technological and/or other means circumvent MODUM’s check, MODUM will have fulfilled it’s duty and will not be liable for breach of any US Embargo Restrictions.</p>
            </li>
          </ol>

          <h4>III. MODUM TOKEN SYSTEM</h4>
          <ol>
            <li><b>Token Economics</b><p>The modum token (MOD) is a token with voting and profit participation rights. The maximum total supply is 30 million tokens. 20.1 million are offered in the token sale, 0.9 million are used to cover the token sale costs and for the bug bounty program and 9 million MOD are reserved for modum.io, to be vested based on major milestones. Token holders will vote to decide if the milestones are met and release the locked tokens. Locked tokens do not have profit share nor voting rights. The price per 1 MOD is 1 USD. modum.io Ethereum ERC20 technology was used to build the MOD token. The Smart Contract and token sale application code is open source and has been reviewed by Lykke Corp and Consecom (a Swiss IT Security consultancy).</p>
            </li>
            <li><b>Milestones</b><p>The funds collected in the token sale are used to meet predefined milestones in our product roadmap as elaborated below. The mentioned dates are “earliest dates possible” and no voting will take place before the dates mentioned. The milestones provide today’s view of the market needs. Due to the fast-evolving nature of the blockchain ecosystem those milestones are indicative, i.e. if we need to change a predefined milestone we will require prior acceptance of the change with an additional voting, which will be communicated to our token holders prior to voting. In case of a negative vote, modum.io can reinitiate the voting process earliest 90 days after the end of a prior voting period and no milestones can be skipped by modum.io. We commit to those milestones regardless of the outcome of the token sales and total funds collected.</p>
              <p>Milestone 1 – expected earliest October 22nd 2017:</p><p>The Objective is to ensure a proper minting and token distribution process to release upon positive voting 900.000 tokens (3% of the total MOD supply) to a wallet controlled by modum.io. The released tokens are used for our advisors and many helping hands in the making of this token sale. No tokens are distributed to the modum team.</p>
              <p>Milestone 2 – expected earliest Q1/2018:</p><p>The Objective is to ensure the go-to-market of our first product line including the mass production of our dedicated sensor device and the product ecosystem (application, validation & qualification). We integrate at least 2 environmental sensors to the hardware platform (temperature and motion) and support besides Ethereum as blockchain backend at least 1 of the following blockchains: IOTA, NEO, Fabric, ETC or Rootstock. 3 million tokens are upon positive voting released to a wallet controlled by modum.io.</p>
              <p>Milestone 3 – expected earliest Q1/2019:</p><p>The Objective is to deliver the next sensor generation with real-time interaction (via current or emerging network technologies, like LoRaWAN). We integrate at least one additional environmental sensor (light or humidity) and any 2 additional blockchain backends of the following: IOTA, NEO, Fabric, ETC, Rootstock, Waves, Tezos, EOS or Cosmos. 3 million tokens are upon positive voting released to a wallet controlled by modum.io.</p>
              <p>Milestone 4 – expected earliest Q1/2020:</p><p>The Objective is to deliver the next sensor generation with a real-time, on-chip blockchain node. We integrate additional environmental sensors (e.g. light or humidity) and deliver the complete modum software in a fully decentralized architecture. 3 million tokens are upon positive voting released to a wallet controlled by modum.io.</p>
            </li>
            <li><b>Voting principle and profit share process</b><p>With the publishing of the annual report modum.io can claim whether or not the present milestone was achieved. With the publishing of the report the start date of the voting period is set. The voting period lasts for two weeks. Every MOD token in circulation has one vote. Locked tokens cannot vote. The default vote is void. The quorum is defined by the number of executed votes within the predefined timeline. A simple majority is needed to decide if the milestone was met. If the milestone was met, the defined number of tokens are released to the modum.io wallet. The board of modum.io decides and declares once a year the amount of dividends when there is a profit. A payment equivalent to this amount is converted to Ether and sent to the modum smart contract. The modum smart contract evaluates the current holdings and distributes the profits to the token holders in Ether. The voting and profit share smart contract are open source.</p>
            </li>
          </ol>

          <h4>IV. RISKS</h4>
          <ol>
            <li>The purchase and any other acquisition of MODUM Token tokens carries with it significant risk. Prior to participation, carefully consider the potential risks and, to the extent necessary, consult a lawyer, accountant, and/or tax professional to evaluate the risk entailed. Do not overcommit.</li>
            <li>MODUM.IO MAKES NO PROMISES OF POSSIBLE GAINS OR RETURNS. YOU CAN POTENTIALLY LOSE ALL YOUR MONEY IF THE MARKET PRICE DROPS TO ZERO.</li>
            <li>MODUM Token tokens are ERC20 tokens on the Ethereum blockchain. You must access and use them using an ERC20-compliant wallet. It is your responsibility to not lose your MODUM Tokens by losing access to the keys which allow access to your wallet and/or allowing malicious third parties to access your keys and/or your wallet. MODUM.IO WILL NOT BE HELD LIABLE FOR ANY LOSS OF TOKENS AND/OR OTHER DAMAGE INCURRED BY YOU AS A RESULT OF THE LOSS OF KEY OR ATTACK ON YOUR WALLET.</li>
            <li>The field of digital cryptography is very new and for this reason there is a risk of unforeseen attacks on several or all parts of the MODUM Token System. In the event of such an attack, you may lose all your MODUM Tokens. MODUM.IO WILL NOT BE HELD LIABLE FOR ANY LOSS OF TOKENS AND/OR OTHER DAMAGE INCURRED BY YOU AS A RESULT OF SUCH AN ATTACK.</li>
            <li>It’s possible that a group of people will take our software and modify it to accept a different set of Tokens, or no Tokens at all („Forking“). This could devalue MODUM tokens. In the event of a Forking, MODUM.IO WILL NOT BE HELD LIABLE FOR ANY LOSS OF VALUE AND/OR TOKENS INCURRED BY YOU AS A RESULT OF SUCH A FORKING.</li>
          </ol>

          <h4>V. REPRESENTATION & WARRANTIES</h4>
          <ol>
            <li>By signing this Subscription Agreement You represent that
              <ol>
                <li>You have read and understood the contents of this Agreement;</li>
                <li>You are purchasing the tokens for your own account;</li>
                <li>You are not located in the U.S. and are not participating in the Offer from the U.S. or are acting on a non-discretionary basis for a principal located outside the U.S.; You are not giving an order to participate in the Offer from the U.S. "U.S." means the United States of America, its territories and possessions, any state of the United States of America and the District of Columbia;</li>
                <li>You are a Relevant person and/or a Professional Investor and/or that you have not been solicited by modum.io but have learned of the MODUM Token Sale solely based on your own initiative, pursuant to Section II. of these Terms, if You reside in the United Kingdom, Singapore, Hong Kong, Canada and Japan.</li>
                <li>You are solely responsible for searching legal advice in the jurisdictions relevant for You when purchasing MODUM tokens and that You comply with the respective tax laws in Your jurisdiction with regards to the purchase of MODUM tokens.</li>
                <li>By acquiring MODUM Token, whether directly or from another stakeholder, you represent and warrant that you: have a basic level of understanding of the usage and intricacies of cryptographic tokens, such as Ethereum ERC20 tokens, and other blockchain-based software.</li>
                <li>are at least 18 years old;</li>
                <li>are not exchanging or using MODUM Tokens for any illegal purpose; understand that there is no warranty, guarantee or liability for defect with regards to MODUM Token tokens, express or implied, to the extent permitted by law;</li>
                <li>further agree to accept that you participate and/or use (in) the MODUM Token system at your own and sole risk;</li>
                <li>are in compliance with your local, state, and national laws.</li>
              </ol>
            </li>
            <li>If purchasing MODUM Tokens, you must comply with all applicable tax laws, including, but not limited do, the reporting and payment of income tax or similar arising in connection with the appreciation and depreciation of MODUM Tokens. You bear the sole responsibility to determine such implications and act in accordance with the law that applies to you.</li>
            <li>If you are purchasing MODUM Token tokens on behalf of any entity, you are authorized to accept these Terms on such entity’s behalf and that such entity will be responsible for any damage arising out of a breach of these terms by You or any other employee or agent of such entity (references to “you” in these Terms refer to You and such entity, jointly).</li>
            <li>TO THE EXTENT PERMITTED PURSUANT TO APPLICABLE LAW, YOU SHALL INDEMNIFY, DEFEND, AND HOLD MODUM.IO AND/OR ITS RESPECTIVE PAST, PRESENT AND FUTURE EMPLOYEES, OFFICERS, DIRECTORS, CONTRACTORS, CONSULTANTS, VOLUNTEERS, EQUITY HOLDERS, SUPPLIERS, VENDORS, SERVICE PROVIDERS, PARENT COMPANIES, SUBSIDIARIES, AFFILIATES, AGENTS AND REPRESENTATIVES HARMLESS FROM AND AGAINST ANY AND ALL CLAIMS, DAMAGES, LOSSES, SUITS, ACTIONS, DEMANDS, PROCEEDINGS, EXPENSES, AND/OR LIABILITIES (INCLUDING BUT NOT LIMITED TO REASONABLE ATTORNEYS’ FEES INCURRED AND/OR THOSE NECESSARY TO SUCCESSFULLY ESTABLISH THE RIGHT TO INDEMNIFICATION) FILED/INCURRED BY ANY THIRD PARTY AGAINST MODUM.IO IN CONNECTION WITH THE MODUM TOKEN SYSTEM ARISING OUT OF A BREACH OF ANY WARRANTY, REPRESENTATION, OR OBLIGATION HEREUNDER.</li>
          </ol>

          <h4>VI. PRIVACY POLICY</h4>
          <ol>
            <li>By partaking in the sale of MODUM Token Tokens you consent and agree to your personal data, including, but not limited to, Your e-mail address and/or name and information with regards to your wealth („Information“) being processed by modum.io for its business purposes or the purposes of building, promoting, and communicating (about) the MODUM Token Sale and the MODUM Token. Modum.io will abide by applicable law when processing your personal data.</li>
            <li>We will not sell, share, or rent or otherwise make available any of that information to other parties, except that we may disclose the Information to third parties who perform services on our behalf and have a need to access the Information in connection with those services.</li>
            <li>We will not, however, share any e-mail addresses with any third party or send unsolicited e-mail to any of the addresses we collect, except in very limited circumstances as set forth in this Section.</li>
            <li>Modum.io may use browser cookies on the Site to keep track of your visit to our Site. A "cookie" is a small amount of data that is sent from a Web server to your browser and stored on your computer's hard drive. Use of cookies may allow Modum.io to provide a higher quality, more relevant, customer experience. Use of cookies may also allow Modum.io to automate entry into password protected portions of the Site so that you will not need to reenter your password each time you visit our Site. We may also use cookies to track which areas of the web site are most popular with our users to further Modum.io understanding concerning overall use of the site. With most Internet Browsers, you can erase cookies from your computer hard drive, block all cookies, or receive a warning before a cookie is stored on your computer. Please refer to your browser instructions or a help screen to learn more about these functions and how to use them.</li>
          </ol>

          <h4>VII. GENERAL PROVISIONS</h4>
          <ol>
            <li>In no event shall modum.io, members of modum.io staff, contractors, or volunteers be liable for:
              <ul>
                <li>Any loss of profits, lost savings or incidental, indirect, special or consequential damages, arising out of your use or inability to use the services or products offered by modum.io or the breach of any of these Terms by any third party;</li>
                <li>Any security risk such as hacker attacks, loss of password, loss of private key or similar.</li>
                <li>Mistakes or errors in code, text, or images involved in the sale.</li>
                <li>Any losses resulting from the volatility in pricing of pillars in any countries and cryptocurrency exchanges.</li>
              </ul>
            </li>
            <li>If applicable law does not allow all or any part of the above limitation of liability to apply to you, the limitations will apply to you only to the extent permitted by applicable law.</li>
            <li>By acquiring MODUM Tokens and to the extent permitted by applicable law, the buyer agrees not to hold modum.io or any employee or contractor of modum.io liable for any losses or damages arising out of or in any way connected to the buyer’s failure to properly secure the private key to the wallet containing their pillars: hacker’s attacks, stolen devices, loss of passwords, etc.</li>
            <li>If any term, clause or provision of these Terms is held unlawful, void or unenforceable, then that term, clause or provision will be severable from these Terms and will not affect the validity or enforceability of any remaining part of that term, clause or provision, or any other term, clause or provision of these Terms.</li>
          </ol>

          <h4>VII. GOVERNING LAW AND JURISDICTION</h4>
          <p><b>THIS TERMS SHALL BE GOVERNED BY AND CONSTRUED IN ACCORDANCE WITH THE SUBSTANTIVE LAWS OF SWITZERLAND, EXCLUDING THE PROVISIONS OF THE CONFLICT OF LAWS AND ANY INTERNATIONAL CONVENTIONS APPLICABLE. ANY DISPUTE ARISING IN CONNECTION WITH THIS AGREEMENT SHALL BE SUBJECT TO THE EXCLUSIVE JURISDICTION OF THE COURTS COMPETENT FOR THE CITY OF ZÜRICH, SWITZERLAND.</b></p>
        </div>
        <input type="checkbox" v-model="terms"> <span>I have read this agreement and I accept all of its terms and conditions.</span>
      </div>
      <div slot="footer">
        <div class="text-center">
          <button  @click="send()" :disabled="!valid">
            Send Invite
          </button>
        </div>
      </div>
    </modal-comp>
    <div class="row">
      <div class="col-xs-12 text-center">
        <div style="margin: auto;">
          <h2>Please register your e-mail and<br/>confirm the token sale terms.</h2>
        </div>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="col-xs-12">
          <p class="bg-danger">{{errorMsg}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-offset-2 col-md-8 col-xs-12">
          <input type="email" id="email"
                 required="required"
                 v-model="email"
                 v-on:keyup.enter="showModal"
                 placeholder="E-Mail"
                 autofocus>
        </div>
      </div>
      <div class="row top-buffer">
        <div class="col-md-offset-2 col-md-8 col-xs-12">
          <button :disabled="!validEmail || $root.store.soldOut" @click="showModal">Next</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import store from '@/store'
  import Vue from 'vue'
  import axios from 'axios'
  import ModalComp from './Modal.vue'
  let registerEndpoint = 'register'

  export default {
    data: function () {
      return {
        modalVisible: false,
        email: '',
        terms: false,
        errorMsg: '',
        sharedState: store
      }
    },
    computed: {
      validEmail: function () {
        // eslint-disable-next-line
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return this.email && re.test(this.email)
      },
      valid: function () {
        return this.validEmail && this.terms
      }
    },
    methods: {
      showModal: function (event) {
        if (this.validEmail && !this.$root.store.soldOut) {
          event.preventDefault() // prevents to add a question mark before the hashtag
          this.modalVisible = true
        }
      },
      hideModal: function () {
        this.modalVisible = false
        this.terms = false
      },
      async send () {
        this.errorMsg = ''
        if (this.valid) {
          try {
            this.sharedState.loading = true
            await axios.post(Vue.config.API + registerEndpoint, {
              email: this.email
            })
            this.$router.push({name: 'step2'})
          } catch (e) {
            this.errorMsg = 'Oops. Something is wrong. Is it possible that this E-Mail is already used? Please feel free to contact us...'
          }
        } else {
          this.errorMsg = 'Please enter a valid E-Mail address or accept the Terms & Conditions'
        }
        this.sharedState.loading = false
        this.hideModal()
      }
    },
    components: {
      ModalComp
    }
  }
</script>

<style media="screen" scoped>
  #legal {
    padding: 3rem;
    text-align: left;
    width: 100%;
    height: 50vh;
    resize: none;
    font-size: small;
    overflow-y: auto;
    margin-bottom: 2rem;
    border: 1px solid black;
  }

  #legal ol li {
    list-style-type: decimal;
  }

  #legal ol li li {
    list-style-type: lower-alpha;
  }
</style>
