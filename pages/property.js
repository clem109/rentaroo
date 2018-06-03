import {mockData} from '../mockData.js'
import Link from 'next/link'
import {formatData} from '../utils.js'
import Navbar from '../components/Navbar'

export default class extends React.Component {

  state = {
    reserving: false,
    viewing: false
  }

  static async getInitialProps({req, res, query}) {
    let id = query.id
      ? query.id
      : 1
    const propById = getPropertyById(mockData, id)
    return {data: formatData(propById)}
  }

  viewPlace = () => {
    this.setState({
      viewing: !this.state.viewing
    })
  }

  reservePlace = () => {
    this.setState({
      reserving: !this.state.reserving
    })
  }

  render() {
    const {
      title,
      city,
      location,
      price,
      id,
      date,
      rooms,
      floor
    } = this.props.data
    console.log(this.props.data)
    return (
      <div>

        <section class="hero is-small is-primary is-bold">
          <Navbar/>

          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Flat in {city}, {location}
              </h1>
              <h2 class="subtitle">
                Price: {price}
                元
                <br/>
                Available: {date}
              </h2>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="columns">
            <div className="column is-one-third">
              <Image id={id}/>
            </div>
            <div className="column is-two-thirds">
              <div className="columns is-one-half">
                <div className="column">
                  <Detail name="Adress" val={city + ', ' + location}/>
                  <Detail name="Floor" val={floor}/>
                </div>
                <div className="column is-one-half">
                  <Detail name="Rooms" val={rooms}/>
                  <Detail name={"Published date"} val={date}/>
                </div>
              </div>
              <div class="tags column is-one-half">
                <span class="tag">One</span>
                <span class="tag">Two</span>
                <span class="tag">Three</span>
                <span class="tag">Four</span>
                <span class="tag">Five</span>
                <span class="tag">Six</span>
                <span class="tag">Seven</span>
                <span class="tag">Eight</span>
                <span class="tag">Nine</span>
                <span class="tag">Ten</span>
                <span class="tag">Eleven</span>
                <span class="tag">Twelve</span>
                <span class="tag">Thirteen</span>
                <span class="tag">Fourteen</span>
                <span class="tag">Fifteen</span>
                <span class="tag">Sixteen</span>
                <span class="tag">Seventeen</span>
                <span class="tag">Eighteen</span>
                <span class="tag">Nineteen</span>
                <span class="tag">Twenty</span>
              </div>
              <div class="columns">
                <div class="tags column is-one-half"></div>

                <div class="tags column is-one-half">
                  <button
                    class="button is-link is-medium"
                    style={{
                    margin: "10px"
                  }}
                    onClick={this.reservePlace}>Reserve</button>

                  <button
                    class="button is-link is-medium"
                    style={{
                    margin: "10px"
                  }}
                    onClick={this.viewPlace}>View</button>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container">
          <FakeContent/>
        </section>
        <ReserveModal
          isActive={this.state.reserving}
          location={location}
          city={city}
          price={price}
          title={title}/>
        <ViewModal isActive={this.state.viewing}/>
      </div>
    )
  }

}
const Image = ({id}) => {
  return (<img src={"/static/img/room" + id + ".png"}/>)
}
const Detail = ({name, val}) => {
  if (name) {
    return (
      <div>
        <b>{name}</b>
        : {val}
      </div>
    )
  }
}

const ViewModal = ({isActive}) => {
  return (
    <div className={`modal ${isActive
      ? 'is-active'
      : ""}`}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Organise a Viewing</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          Is {" "}
          <strong>Monday 31st June at 5pm
          </strong>
          {" "}
          okay for a visit? Alternatively pick another date.
          <br/><br/>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>5pm - 10pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>5pm - 10pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>5pm - 10pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>5pm - 10pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>5pm - 10pm</td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer
          class="modal-card-foot"
          style={{
          flexDirection: "row-reverse"
        }}>
          <Link href="/viewingManagement">
            <button class="button is-success">Confirm time</button>
          </Link>
          <button class="button">Cancel</button>

        </footer>
      </div>

    </div>

  )
}

const ReserveModal = ({isActive, city, location, price, title}) => {
  return (
    <div className={`modal ${isActive
      ? 'is-active'
      : ""}`}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Rental Contract</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">

            <h5>{city}, {location}{" "} {title}{" "}
              for {price}元</h5>

            <p>
              提示：<br/><br/>
              Prompt:<br/><br/>
              1. 生活费用是指您居住期间产生的水、电、燃气费，其中预付费非客户购买部分和全部后付费由angelhack管理 The cost of living
              refers to the water, electricity, and gas costs incurred during your period of
              residence, where prepaid non-customers purchase part or all of the post-paid
              fees are managed by angelhack

              <br/><br/>2. 当您发现家里的水表、电表、燃气表出现不走字等坏的迹象，请及时联系您的服务管家。 When you find that the
                water meter, electricity meter, and gas meter in your home are showing signs of
                failure, please contact your service manager.
              <br/><br/>3. 欢迎您选择自如！使用本软件签约前，您应当如实按照本软件提示完成相关信息填写，并确保前述信息合法、真
                实、有效及完整；同时您应仔细阅读、充分理解合同条款。您使用本软件并进行签约的行为视为您通篇阅读并作出了 审慎选择，完全同意本合同条款。 Welcome to
                choose angelhack! Before signing the contract with the software, you should fill
                out the relevant information according to the instructions of the software and
                ensure that the foregoing information is legal, true, valid, and complete; at
                the same time, you should carefully read and fully understand the terms of the
                contract. Your use of the software and the signing of the contract act as you
                read through it and made a careful selection, fully agreeing to the terms of
                this contract
              <br/><br/>4. 您发起支付（含押金、首笔房租、服务费）后，对应房源将被锁定，请在20分钟内完成支付。如您未全额支付，请
                在48小时内足额支付（如应付金额大于人民币五万元的，请在72小时内足额支付）。如果您未能在上述要求的时限内
                完成相应支付，则您的合同将于上述时限届满时起终止，且您需承担相当于房屋月租金金额20%的违约金（违约金将自
                您已经支付的费用中直接扣除，不足部分另行收取，就同一租赁房屋继续续约的客户无需承担上述违约金），同时，
                该房源将被释放【“释放”是指：该房源恢复可使用状态，其他用户均可就该房源与我公司签约】。支付完成后您应
                于48小时内与我公司就该房源完成物业交割的确认，否则视为您认可物业交割信息。 After you initiate payment (including
                deposit, first rent, service fee), the corresponding listing will be locked.
                Please complete the payment within 20 minutes. If you do not pay in full, please
                pay in full within 48 hours (if the amount payable is more than RMB 50,000,
                please pay in full within 72 hours). If you fail to complete the payment within
                the above-mentioned time limit, your contract will be terminated upon expiry of
                the above time limit, and you will be liable for a penalty equal to 20% of the
                monthly rent of the house (penalty damages will be paid from what you have
                already paid The fee is deducted directly from the fee, and the insufficient
                part is charged separately. Customers who continue to renew the same rental
                house do not have to bear the above breach of contract penalty. At the same
                time, the property will be released. "Released" means that the property is ready
                for use. Other users can sign this contract with our company.] After the payment
                is completed, you should confirm with the company within 48 hours that the
                property has completed the delivery of the property; otherwise, it will be
                deemed as your approval of the property delivery information.
              <br/><br/>5.
                需要特别提示您的是：请您勿将与房屋租赁相关的租金、押金、水电燃气费等相关费用以现金形式直接交给经办人员个人，否则需自行承担可能的钱财损失。 What needs
                to be specially pointed out is: Please don't directly use the cash, such as
                rent, deposit, water, gas, and other expenses related to house leasing, directly
                to the person handling the work. Otherwise, you will have to bear the possible
                financial loss.
              <br/><br/>6. 您应妥善保管我公司提供的“Angelhack空间”账户、密码和（或）数字证书及其他安全产品。因您Angelhack空间账户、密码
                和（或）数字证书及其他安全产品遗失、泄露、被窃所导致的损失我公司不承担责任。 You should keep the "Angelhack Space"
                account, password and/or digital certificate and other security products
                provided by our company. Our company will not be responsible for any losses
                caused by the loss, leakage or theft of your account, password and/or digital
                certificates and other security products.
              <br/><br/>7. 本合同将以电子签章技术生成电子文档，该文档即具备合同法律效力，无需房屋资产出租人另行签署或加盖传统印
                章。您可以在自如网登陆您的自如空间，自行查看及下载打印。 This contract will generate an electronic document
                using electronic signature technology. This document has the legal effect of the
                contract and does not require the owner of the property to sign or stamp the
                traditional seal. You can freely log in your free space, view and download and
                print.<br/><br/>8.
                本合同依据《中华人民共和国合同法》及有关法律、法规的规定，由甲方作为房屋资产出租人授权的房屋管理人和 您（下称“乙方”）在平等、自愿的基础上达成 This
                contract is based on the "Contract Law of the People's Republic of China" and
                relevant laws and regulations. The building manager authorized by Party A as the
                lessor of the housing assets and you (hereinafter referred to as "Party B") are
                reached on an equal and voluntary basis.

            </p>

          </div>
        </section>
        <footer
          class="modal-card-foot"
          style={{
          flexDirection: "row-reverse"
        }}>
          <Link href="/">
            <button class="button is-info ">E-Sign Contract</button>
          </Link>
        </footer>
      </div>
    </div>
  )
}
const FakeContent = () => {
  return (
    <div class="content">
      <h1>This is our appartment</h1>
      <p>Lorem ipsum<sup>
          <a>[1]</a>
        </sup>
        dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
        eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
        vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum
        mattis neque. Sub<sub>script</sub>
        works as well!</p>
      <h2>Some more information</h2>
      <p>Curabitur accumsan turpis pharetra
        <strong>augue tincidunt</strong>
        blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
        pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus
        lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>One</th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>Eight</td>
          </tr>
          <tr>
            <td>Nine</td>
            <td>Ten</td>
          </tr>
          <tr>
            <td>Eleven</td>
            <td>Twelve</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const getPropertyById = (dat, id) => {
  return dat.filter((el) => el.id == id)[0]
}
