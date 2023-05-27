<!--
    About us page
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'About Us', link: '/abouts' }]" />

        <AboutUsStructureLinks :links = "[
            {
                link:'whoweare', //should be the same of the id section
                title: 'Who we are'
            }, 
            {
                link: 'companymission',
                title: 'Company mission'

            }, 
            {
                link: 'partners',
                title: 'Partners'

            }
        ]"></AboutUsStructureLinks>
    

        <div class="card" id="whoweare">
            <div class="content-section">
                <h2>Who we are</h2>
                <p>Venture Capital is a fictional investment management company that specializes 
                    in providing funding to early-stage and high-growth potential businesses. 
                    As a venture capital firm, it seeks out innovative and promising startups and provides 
                    them with financial backing in exchange for an equity stake in the company. 
                    Venture Capital plays a vital role in the entrepreneurial ecosystem by supporting entrepreneurs 
                    and helping them scale their businesses. Through careful due diligence and analysis, 
                    Venture Capital aims to identify startups with significant market potential and help them 
                    navigate the challenges of growth by offering not just capital but also strategic guidance 
                    and industry connections. By leveraging its expertise and network, Venture Capital aims to maximize 
                    returns on its investments and contribute to the success of the companies it supports.</p>
                <p>Venture Capital was founded in 2017 by four brilliant and visionary individuals: Alex Thompson, Emma Johnson, Michael Ramirez, and Sarah Chen. These individuals shared a common passion for entrepreneurship and a deep understanding of the startup ecosystem. Having witnessed the challenges faced by early-stage companies in securing funding, they recognized the need for a specialized investment firm that could bridge the gap between promising startups and the capital they required to thrive.

                Each founder brought a unique set of skills and experiences to the table. Alex was a seasoned entrepreneur who had successfully launched and scaled multiple businesses. Emma had a strong background in finance and had worked with renowned investment firms. Michael was a technology enthusiast with a knack for identifying disruptive innovations, and Sarah possessed expertise in marketing and business development.</p>
            </div>
            <div class="image-section">
                <img src="@/assets/img/aboutus/group.jpg" alt="Immagine" />
            </div>
        </div>
        <div class="card" id="companymission">
            <div class="image-section">
                    <img src="@/assets/img/aboutus/other2.jpg" alt="Immagine" />
                </div>
                <div class="content-section">
                    <h2>Company mission</h2>
                    <p>Driven by their collective expertise and a shared belief in the power of innovation, the founders pooled their resources to establish Venture Capital. Their mission was clear: to provide financial support, strategic guidance, and industry connections to startups with transformative potential. By leveraging their own experiences and networks, they aimed to nurture these young companies, fuel their growth, and ultimately generate exceptional returns for their investors. Since its inception, Venture Capital has developed a reputation for its keen eye for promising opportunities and its ability to identify startups that have the potential to disrupt industries. The firm has cultivated a diverse portfolio of successful investments across various sectors, including technology, healthcare, renewable energy, and consumer products. Through its rigorous due diligence process and hands-on approach, Venture Capital has helped countless entrepreneurs turn their bold ideas into flourishing businesses. Today, Venture Capital stands as a trusted and influential player in the investment landscape, known for its unwavering commitment to supporting innovation and driving positive change. With a dedicated team of professionals and a track record of success, the firm continues to play a pivotal role in shaping the future of entrepreneurship and investment.</p>
                </div>
        </div>
        <div class="card" id="partners">
                <div class="content-section">
                    <h2>Partners</h2>
                    <p>Venture Capital has established a vast network of strategic partners, forging relationships with various organizations across industries. These partnerships are essential for enhancing the firm's investment capabilities and providing comprehensive support to its portfolio companies. One vital aspect of Venture Capital's partnership ecosystem lies in its collaboration with industry experts and thought leaders. By engaging with these experts, Venture Capital gains access to deep domain knowledge, market insights, and valuable expertise in specific sectors. This enables the firm to make well-informed investment decisions and provide strategic guidance to its portfolio companies based on the latest trends and emerging opportunities in each industry. Another significant facet of Venture Capital's partnerships is its engagement with startup incubators and accelerators. These collaborative relationships allow Venture Capital to tap into a pool of innovative ideas and entrepreneurial talent. By connecting with these incubators and accelerators, Venture Capital can identify promising early-stage startups and provide them with the necessary funding, mentorship, and resources to fuel their growth and success. Furthermore, Venture Capital partners with academic institutions, research organizations, and innovation hubs to stay at the forefront of technological advancements and emerging trends. These partnerships enable the firm to gain access to groundbreaking research, cutting-edge technologies, and early-stage inventions that have the potential to disrupt industries. Venture Capital also forms alliances with other investment firms and financial institutions, both domestically and internationally. These partnerships expand the firm's reach and deal flow, enabling it to identify investment opportunities on a global scale and leverage the combined expertise and networks of multiple entities. In summary, Venture Capital's extensive network of partners spans industry experts, startup incubators, academic institutions, research organizations, and other investment firms. These partnerships contribute to the firm's ability to identify promising investment opportunities, offer strategic guidance, and provide comprehensive support to its portfolio companies. By leveraging the collective knowledge, resources, and networks of its partners, Venture Capital strives to maximize returns on investments and drive the success of the companies it supports.</p>
                </div>
                <div class="image-section">
                    <table>
                        <tr>
                            <td>
                                <img src="@/assets/img/aboutus/hp.png" alt="Immagine" />
                            </td>
                            <td>
                                <img src="@/assets/img/aboutus/nike.png" alt="Immagine" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="@/assets/img/aboutus/shell.png" alt="Immagine" />
                            </td>
                            <td>
                                <img src="@/assets/img/aboutus/pepsi.png" alt="Immagine" />
                            </td>
                        </tr>
                    </table>

                </div>
        </div>
    </main>
</template>
