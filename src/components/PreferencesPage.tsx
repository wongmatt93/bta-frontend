import PreferenceForm from "./PreferenceForm";
import "./PreferencesPage.css";

const PreferencesPage = () => {
  return (
    <main className="PreferencesPage">
      <h2>
        Choose <div>your preferences</div>
      </h2>
      <PreferenceForm />
    </main>
  );
};

export default PreferencesPage;
