// Função para rolar automaticamente para o final da lista de mensagens quando uma nova mensagem é adicionada
const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  // Função que atualiza a lista de mensagens a cada poucos segundos
  useEffect(() => {
    const interval = setInterval(() => {
      updateMessages()
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  