import React from "react";
import { Button, Modal } from "antd";
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
                <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
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
                  <div className="text-md text-slate-500 sm:block hidden">
                    <p className="font-bold text-slate-700">Terms</p>
                    <p>0 Days</p>
                    <p className="font-bold text-slate-700">Due</p>
                    <p>2023.12.21</p>
                  </div>
                </div>
                <div className="bill-table-area mt-8">
                  <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-start text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden "
                        >
                          Piece
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="py-4 pr-3 text-center">
                          <img
                            src="https://termodizayn.com/thumb.php?p=./img/uploads/muhafazakosullari/icerik/49-elma1.jpg&h=434"
                            alt=""
                            className="w-12 h-12 object-cover "
                          />
                        </td>
                        <td className="py-4 pr-3 ">
                          <span className="font-medium">Elma</span>
                        </td>
                        <td className="py-4 pr-3 text-center">
                          <span>5₺</span>
                        </td>
                        <td className="py-4 pr-3 text-center">
                          <span>1</span>
                        </td>
                        <td className="py-4  text-end">
                          <span>5.00₺</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="py">
                      <tr>
                        <th className="text-right pt-4" colSpan="4" scope="row">
                          <span className="font-normal text-slate-700">
                            Sub Total
                          </span>
                        </th>
                        <th className="text-right pt-4" scope="row">
                          <span className="font-normal text-slate-700">
                            61₺
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th className="text-right pt-4" colSpan="4" scope="row">
                          <span className="font-normal text-slate-700">
                            Tax:
                          </span>
                        </th>
                        <th className="text-right pt-4" scope="row">
                          <span className="font-normal text-red-600">
                            4.00₺
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th className="text-right pt-4" colSpan="4" scope="row">
                          <span className="font-normal text-slate-700">
                            Total
                          </span>
                        </th>
                        <th className="text-right pt-4" scope="row">
                          <span className="font-normal text-slate-700">
                            61₺
                          </span>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="py-9">
                    <div className="border-t pt-9 border-slate-200">
                      <p className="text-sm font-light text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi, error. Quia libero enim officia, consequuntur
                        alias laborum porro in eos fugit accusamus commodi natus
                        laudantium, aspernatur corporis provident distinctio
                        tempore ullam est nobis quas laboriosam expedita
                        perferendis pariatur minus. Sint saepe neque optio
                        inventore! Iure aliquid quibusdam adipisci quia
                        repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
          <Button type="primary" size="large">
            Print
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PrintBills;
