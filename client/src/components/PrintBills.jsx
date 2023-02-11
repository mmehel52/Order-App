import React from "react";
import { Modal } from "antd";
const PrintBills = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div>
      <Modal
        title="Print Bill"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        width={800}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
              </div>
              <div className="bill-details">
                <div className="grid grid-cols-4 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Bill Detail:</p>
                    Unwrapped
                    <p>Fake Street</p>
                    <p>San Javier</p>
                    <p>CA 1234</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Bill</p>
                    <p>The Boring Company</p>
                    <p>Tesla Street</p>
                    <p>CA 1234</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Bill No</p>

                    <p>00041</p>
                    <p className="font-bold text-slate-700">Date of Issue</p>
                    <p>2022-11-21</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Terms</p>
                    <p>0 Days</p>
                    <p className="font-bold text-slate-700">Due</p>
                    <p>00.00.00</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default PrintBills;
