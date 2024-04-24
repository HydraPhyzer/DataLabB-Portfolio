let Details = [
  {
    id: 1,
    Title: "Crane GPT",
    Description:
      "Introducing CraneGPT, our cutting-edge chatbot designed to revolutionize crane operations. Leveraging the power of Langchain technology and the intelligence of the LAMA-2 language model, CraneGPT becomes your crane expert on demand. It seamlessly interprets crane manuals, providing expert answers to ensure safe and efficient crane operations. Powered by VectorDB for embeddings, CraneGPT offers precision and reliability, enhancing your crane-related queries. Unlock the future of crane management with CraneGPT - your digital partner for superior crane expertise and productivity.",
    Keywords: "Langchain, Large Language Model (LAMA-2), VectorDB",
    Image: "/Pictures/CraneGPT.webp",
    Challenges: [
      "Interpreting various crane manuals with different terminologies and structures",
      "Ensuring the accuracy and reliability of the answers provided.",
      "Implementing a user-friendly interface for seamless interactions",
    ],
    Tools: [
      "Langchain for integrating language model capabilities.",
      "LAMA-2, a Large Language Model, for understanding and generating human-like text.",
      "VectorDB for storing and retrieving vector embeddings efficiently.",
      "ReactJs for front end development.",
    ],
  },
  {
    id: 2,
    Title: "PashtoLexi",
    Description:
      "Our approach to creating a Pashto language thesaurus involved a combination of manual and automated methods. We analyzed Pashto texts manually and compiled lists of synonyms and related words. We also used natural language processing (NLP) techniques to extract and classify words based on their semantic similarity. To train the word2vec model, we used a Pashto corpus and evaluated it on a Pashto journals dataset. Our proposed model outperformed all existing approaches and produced reasonable results.",
    Keywords: "NLTK and spaCy, WordNet",
    Image: "/Pictures/PashtoLexi.png",
    Challenges: [
      "Manual analysis of Pashto texts required extensive labor and time.",
      "Ensuring the accuracy of the synonym lists and related words.",
      "Implementing effective NLP techniques for semantic similarity extraction.",
    ],
    Tools: [
      "NLTK and spaCy for natural language processing tasks.",
      "Train Word2Vec model from scratch for generating the embeddings of pashto text.",
      "Cosine Similarity for accuracy metric.",
      "WordNet for lexical database support.",
    ],
  },
  {
    id: 3,
    Title: "NeuroGensis",
    Description:
      "We have used the Deep Convolutional Generative Adversarial Networks (DCGAN) machine learning algorithm to generate the fake samples. In this research-oriented work, we extracted the salient features of DCGAN and practically demonstrated and implemented it to generate the fake scans of the brain tumors and found it to outperform other types of generative adversarial networks (GANs).",
    Keywords: "PyTorch, Deep Learning, Medical Imaging",
    Image: "/Pictures/NeuroGenis.webp",
    Challenges: [
      "Extracting salient features of DCGAN effectively for generating realistic fake scans.",
      "Ensuring that the generated scans are indistinguishable from real scans for practical applications.",
      "Outperforming other GAN models in terms of quality and realism.",
    ],
    Tools: [
      "PyTorch for implementing deep learning models.",
      "Deep Convolutional Generative Adversarial Networks (DCGAN) for generating fake scans.",
    ],
  },
  {
    id: 4,
    Title: "TenantTalker",
    Description:
      "We utilized the RASA framework, along with GPT3 integration, to design and develop an interactive chatbot. Our chatbot operates on a client-server model, allowing for real-time response through the RASA framework and ChatGPT. The application has the capability to answer close questions as well as open-ended queries, providing users with a natural and engaging conversational experience. We implemented intent classification through the RASA framework, allowing the chatbot to interactively respond to the user with multiple options to sort out the problem at hand.",
    Keywords: "RASA framework, GPT-3, chatbot",
    Image: "/Pictures/TenantTalker.png",
    Challenges: [
      "Ensuring real-time responses in the client-server model.",
      "Implementing effective intent classification for interactive responses.",
      "Fine-tuning the GPT3 model for various parameters and problem sets.",
    ],
    Tools: [
      "RASA framework for building the chatbot and implementing intent classification.",
      "GPT-3 for integrating large-scale language model capabilities.",
    ],
  },
  {
    id: 5,
    Title: "PunctuationCorrector",
    Description:
      "We implemented Bidirectional Encoder Representations from Transformer (BERT), a powerful deep learning algorithm. Our approach is similar to that of Grammarly software and is designed to correct punctuation text datasets, which are publicly available. We built a deep feed-forward neural network with 11 dense layers and utilized ReLu activation function and an optimizer AdamW for the output.",
    Keywords: "PyTorch, deep learning, Keras, NLTK, data preprocessing",
    Image: "/Pictures/PunctuationCorrector.png",
    Challenges: [
      "Correcting punctuation in text datasets with high accuracy.",
      "Implementing a deep learning model with a sufficient number of layers for effective learning.",
      "Choosing the right activation function and optimizer for the model.",
    ],
    Tools: [
      "BERT for understanding and generating text.",
      "PyTorch and Keras for implementing deep learning models.",
      "NLTK for natural language processing tasks.",
    ],
  },
  {
    id: 6,
    Title: "Breast Cancer Disease Detection",
    Description:
      "We used the famous dataset downloaded from the UCI repository challenge and performed exploratory and classification analysis on the Breast Cancer dataset. We conducted extensive cleaning and data preprocessing tasks using pandas and NumPy and visualized the data using seaborn and Matplotlib. Using the ANN model, we achieved an accuracy of 95%, which was further improved up to 99% using k-fold Cross-validation.",
    Keywords: "PyTorch, deep learning, Keras, data preprocessing",
    Image: "/Pictures/BreastCancerDisease.png",
    Challenges: [
      "Cleaning and preprocessing the dataset effectively.",
      "Achieving high accuracy in breast cancer detection.",
      "Implementing k-fold Cross-validation for improved results.",
    ],
    Tools: [
      "ANN model for classification tasks.",
      "Pandas and NumPy for data preprocessing.",
      "Seaborn and Matplotlib for data visualization.",
    ],
  },
];

export default Details;
