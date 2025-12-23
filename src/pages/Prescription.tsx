import React, { useState } from 'react';
import { Upload, FileText, Camera, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import '../styles/Prescription.css';

interface PrescriptionProps {
  onNavigate: (page: string) => void;
}

const Prescription: React.FC<PrescriptionProps> = ({ onNavigate }) => {
  const [uploadMethod, setUploadMethod] = useState<'photo' | 'pdf' | null>(null);
  const [prescriptionData, setPrescriptionData] = useState({
    file: null as File | null,
    doctorName: '',
    date: '',
    patientName: '',
    allergies: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionData({ ...prescriptionData, file });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPrescriptionData({ ...prescriptionData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('home');
    }, 3000);
  };

  const previousPrescriptions = [
    {
      id: 1,
      doctorName: 'Dr. Sarah Johnson',
      date: '2025-12-15',
      status: 'approved',
      medications: ['Paracetamol 500mg', 'Antibiotic Cream']
    },
    {
      id: 2,
      doctorName: 'Dr. James Kipchoge',
      date: '2025-11-20',
      status: 'pending',
      medications: ['Vitamin C 1000mg', 'Cough Syrup']
    },
    {
      id: 3,
      doctorName: 'Dr. Mary Omondi',
      date: '2025-10-10',
      status: 'rejected',
      medications: ['Cold Relief Tablets']
    }
  ];

  if (submitted) {
    return (
      <div className="prescription-success">
        <div className="container flex-center">
          <div className="success-content">
            <CheckCircle size={80} color="var(--success)" />
            <h2>Prescription Submitted Successfully!</h2>
            <p>Our pharmacists will review your prescription shortly.</p>
            <p className="timeline">You'll receive updates via SMS and email. Please check back in 30 minutes.</p>
            <button className="btn btn-primary" onClick={() => onNavigate('home')}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="prescription-page">
      <div className="prescription-header">
        <div className="container">
          <h1>Upload Your Prescription</h1>
          <p>Get your prescription verified by our pharmacists quickly and safely</p>
        </div>
      </div>

      <div className="container prescription-container">
        <div className="prescription-content">
          {/* Upload Section */}
          <section className="upload-section">
            <div className="upload-card">
              <h2>Step 1: Upload Your Prescription</h2>

              {!uploadMethod ? (
                <div className="method-selector">
                  <button
                    className="method-card"
                    onClick={() => setUploadMethod('photo')}
                  >
                    <Camera size={48} />
                    <h3>Take Photo</h3>
                    <p>Use your phone camera to capture the prescription</p>
                  </button>
                  <button
                    className="method-card"
                    onClick={() => setUploadMethod('pdf')}
                  >
                    <FileText size={48} />
                    <h3>Upload PDF/Image</h3>
                    <p>Upload a scanned copy or digital prescription</p>
                  </button>
                </div>
              ) : (
                <div className="upload-area">
                  <div className="file-input-wrapper">
                    <div className="upload-icon">
                      <Upload size={48} />
                    </div>
                    <p>Click or drag to upload {uploadMethod === 'pdf' ? 'PDF or image' : 'photo'}</p>
                    <input
                      type="file"
                      accept={uploadMethod === 'pdf' ? '.pdf,.jpg,.jpeg,.png' : 'image/*'}
                      onChange={handleFileUpload}
                      className="file-input"
                    />
                  </div>
                  {prescriptionData.file && (
                    <div className="file-selected">
                      <FileText size={20} />
                      <span>{prescriptionData.file.name}</span>
                    </div>
                  )}
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setUploadMethod(null)}
                  >
                    Change Method
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Patient Information */}
          <section className="patient-info-section">
            <div className="upload-card">
              <h2>Step 2: Confirm Your Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="patientName">Patient Name *</label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={prescriptionData.patientName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="doctorName">Prescribing Doctor's Name *</label>
                  <input
                    type="text"
                    id="doctorName"
                    name="doctorName"
                    value={prescriptionData.doctorName}
                    onChange={handleInputChange}
                    placeholder="Doctor's full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date of Prescription *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={prescriptionData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="allergies">Known Allergies or Medical Conditions</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={prescriptionData.allergies}
                    onChange={handleInputChange}
                    placeholder="Please list any allergies or medical conditions we should know about"
                    rows={4}
                  />
                </div>

                <div className="safety-checks">
                  <h3>Safety Verification</h3>
                  <div className="check-item">
                    <input type="checkbox" id="confirm1" required />
                    <label htmlFor="confirm1">
                      I confirm this prescription is for me and is still valid
                    </label>
                  </div>
                  <div className="check-item">
                    <input type="checkbox" id="confirm2" required />
                    <label htmlFor="confirm2">
                      I acknowledge the pharmacist may contact me if clarifications are needed
                    </label>
                  </div>
                  <div className="check-item">
                    <input type="checkbox" id="confirm3" required />
                    <label htmlFor="confirm3">
                      I have read and agree to the privacy policy
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={!prescriptionData.patientName || !prescriptionData.doctorName || !prescriptionData.date}
                >
                  Submit Prescription for Review
                </button>
              </form>
            </div>
          </section>
        </div>

        {/* Info Sidebar */}
        <aside className="prescription-sidebar">
          {/* How It Works */}
          <div className="info-card">
            <h3>How It Works</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <p><strong>Upload</strong> your prescription</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <p><strong>Verify</strong> your details</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <p><strong>Pharmacist</strong> reviews it</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <p><strong>Checkout</strong> and delivery</p>
              </div>
            </div>
          </div>

          {/* Safety Features */}
          <div className="info-card">
            <h3>Safety Features</h3>
            <ul className="safety-list">
              <li>
                <AlertCircle size={18} />
                Allergy verification
              </li>
              <li>
                <CheckCircle size={18} />
                Drug interaction checks
              </li>
              <li>
                <FileText size={18} />
                Prescription validation
              </li>
              <li>
                <Clock size={18} />
                Same-day processing
              </li>
            </ul>
          </div>

          {/* Previous Prescriptions */}
          <div className="info-card">
            <h3>Your Prescriptions</h3>
            <div className="prescriptions-list">
              {previousPrescriptions.map(rx => (
                <div key={rx.id} className="rx-item">
                  <div className="rx-header">
                    <p className="rx-doctor">{rx.doctorName}</p>
                    <span className={`rx-status ${rx.status}`}>
                      {rx.status === 'approved' && 'Approved'}
                      {rx.status === 'pending' && 'Pending'}
                      {rx.status === 'rejected' && 'Rejected'}
                    </span>
                  </div>
                  <p className="rx-date">{new Date(rx.date).toLocaleDateString()}</p>
                  <p className="rx-meds">{rx.medications.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="info-card">
            <h3>FAQ</h3>
            <details>
              <summary>Can I upload any prescription?</summary>
              <p>We accept prescriptions from licensed doctors. Emergency prescriptions and expired prescriptions may be rejected.</p>
            </details>
            <details>
              <summary>How long does review take?</summary>
              <p>Most prescriptions are reviewed within 30 minutes. Complex cases may take up to 2 hours.</p>
            </details>
            <details>
              <summary>What if my prescription is rejected?</summary>
              <p>We'll contact you with details. You can resubmit after clarifications are made with your doctor.</p>
            </details>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Prescription;
