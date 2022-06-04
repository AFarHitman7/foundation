import Airtable from "airtable";
import Image from "next/image";
import styles from "../styles/id.module.css";
import Navbar from "../components/Navbar/Navbar";

let base = new Airtable({ apiKey: process.env.airtableKey }).base(
  process.env.tfpBase
);
let meta = [
  {
    id: "cmd",
    check: "tfp-command-line",
    image: "cmd-badge",
  },
  {
    id: "git",
    check: "tfp-git-github",
    image: "git-badge",
  },
];

export default function User({ status, data }) {
  console.log(data);
  if (status == 200) {
    return (
      <>
        <div className={styles.main}>
          <Navbar />

          <p className={styles.name}>
            Welcome, <span>{data.name}</span>
          </p>
          <p className={styles.description}>
            These are badges you have achieved upto now. Keep Leadning and
            Exoloring more.
          </p>

          <div className={styles.badgecontainer}>
            {data.tags.map((item) => {
              if (item["url"] != null) {
                console.log(item.url);
                return (
                  <>
                    <div
                      key={item.id}
                      
                    >
                      <Image
                        src={item.url}
                        style={{
                          boxShadow: "2px 1px 20px 0px rgba(255,255,255,0.56);"
                        }}
                        alt="badge"
                        width={300}
                        height={300}
                        objectFit="contain"
                      />
                    </div>
                    <br />
                  </>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <div>Error!</div>;
  }
}

export const getServerSideProps = async (context) => {
  let user_id = context.params.id;
  let prom = new Promise((resolve, reject) => {
    base("Primer").find(user_id, function (err, record) {
      let data = {};
      data.name = record.get("Name");
      data.tags = [];
      if (err) {
        resolve({
          status: 404,
        });
      }
      meta.forEach((task) => {
        console.log(task);
        let url = record.get(task.image);
        if (url == undefined) {
          url = null;
        }
        data.tags.push({
          id: task.id,
          url: url,
        });
      });
      resolve({
        status: 200,
        data,
      });
    });
  });

  let result = await prom.then((data) => {
    return data;
  });

  console.log(result);
  return {
    props: result,
  };
};